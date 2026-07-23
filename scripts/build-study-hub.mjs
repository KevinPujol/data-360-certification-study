import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

const roadmapMd = read("roadmap.md");
const trainingMd = read("training-material.md");
const quizFiles = [
  "quizzes/section-1-positioning.md",
  "quizzes/section-2-admin.md",
  "quizzes/section-3-ingestion.md",
  "quizzes/section-4-harmonization.md",
  "quizzes/section-5-analysis.md",
  "quizzes/section-6-activation.md",
];

const clean = (value = "") =>
  value
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_`]/g, "")
    .replace(/\s+/g, " ")
    .trim();

function parseRoadmap(md) {
  const blocks = [...md.matchAll(/^## Stage (\d+) — ([^\n]+)\n([\s\S]*?)(?=^## Stage |(?![\s\S]))/gm)];
  const weights = { 1: 14, 2: 13, 3: 18, 4: 17, 5: 18, 6: 20, 7: 0, 8: 0 };
  const hours = { 1: "1.5h", 2: "2.5h", 3: "3h", 4: "3h", 5: "3h", 6: "3.5h", 7: "6h", 8: "2h" };
  return blocks.map((m) => {
    const body = m[3];
    const goal = clean(body.match(/\*\*Goal:\*\*\s*([^\n]+)/)?.[1] || "");
    const tasks = [...body.matchAll(/^- \[ \]\s+(.+)$/gm)].map((x) => clean(x[1]));
    return {
      id: Number(m[1]),
      title: clean(m[2]),
      goal,
      weight: weights[m[1]],
      hours: hours[m[1]],
      tasks,
    };
  });
}

function parseTraining(md) {
  const sections = [...md.matchAll(/^## S(\d) — ([^\n]+)\n([\s\S]*?)(?=^## S\d|^## Appendix|(?![\s\S]))/gm)];
  return sections.map((section) => {
    const cards = [...section[3].matchAll(/^### ([^\n]+)\n([\s\S]*?)(?=^### |(?![\s\S]))/gm)].map((card) => {
      const body = card[2];
      const factsBlock = body.match(/- \*\*Key facts:\*\*\n([\s\S]*?)(?=\n- \*\*Why it matters|\n- \*\*Related|(?![\s\S]))/)?.[1] || "";
      const facts = [...factsBlock.matchAll(/^\s{2}-\s+(.+(?:\n\s{4}.+)*)/gm)].map((x) => clean(x[1]));
      const why = clean(body.match(/- \*\*Why it matters for the exam:\*\*\s*([\s\S]*?)(?=\n- \*\*Related|(?![\s\S]))/)?.[1] || "");
      const explainer = clean(body.match(/- \*\*In depth:\*\*\s*([\s\S]*?)(?=\n- \*\*Key facts|(?![\s\S]))/)?.[1] || "");
      const source = (body.match(/- \*\*Source:\*\*\s*(\S+)/)?.[1] || "").trim();
      const sourceType = clean(body.match(/- \*\*Type:\*\*\s*([^·\n]+)/)?.[1] || "");
      const confidenceRaw = clean(body.match(/\*\*Source confidence:\*\*\s*([^\n·]+)/)?.[1] || "");
      const confidence = (confidenceRaw.match(/^(direct|triangulated|needs[- ]verification|inferred)/i)?.[1] || confidenceRaw)
        .replace(/\s+/g, "-").toLowerCase();
      return { title: clean(card[1]), explainer, facts, why, source, sourceType, confidence };
    }).filter((card) => card.facts.length);
    return {
      id: Number(section[1]),
      title: clean(section[2]),
      cards,
    };
  });
}

function parseQuiz(file, sectionId) {
  const md = read(file);
  const title = clean(md.match(/^# (.+)$/m)?.[1] || `Section ${sectionId}`);
  const questionPart = md.split(/^## Answer Key/m)[0];
  const answerPart = md.split(/^## Answer Key/m)[1] || "";
  const questionMatches = [...questionPart.matchAll(/^\*\*Q(\d+)\.\*\*\s*([\s\S]*?)(?=^\*\*Q\d+\.\*\*|\n---|(?![\s\S]))/gm)];
  const answers = new Map();
  for (const m of answerPart.matchAll(/^\*\*Q(\d+):\s*([^*]+)\*\*\s*[—-]\s*([\s\S]*?)(?=^\*\*Q\d+:|(?![\s\S]))/gm)) {
    answers.set(Number(m[1]), { correct: m[2].match(/[A-D]/g) || [], explanation: clean(m[3]) });
  }
  return questionMatches.map((m) => {
    const num = Number(m[1]);
    const lines = m[2].trim().split("\n");
    const optionStart = lines.findIndex((line) => /^\s*-\s*[A-D][).]\s|^\s*[A-D][).]\s/.test(line));
    const prompt = clean(lines.slice(0, optionStart).join(" "));
    const options = lines.slice(optionStart).map((line) => {
      const parsed = line.match(/^\s*(?:-\s*)?([A-D])[).]\s*(.+)/);
      return parsed ? { key: parsed[1], text: clean(parsed[2]) } : null;
    }).filter(Boolean);
    const answer = answers.get(num) || { correct: [], explanation: "" };
    return {
      id: `s${sectionId}q${num}`,
      section: sectionId,
      number: num,
      prompt,
      options,
      correct: answer.correct,
      explanation: answer.explanation,
      multi: /choose\s*(?:2|two)/i.test(prompt),
    };
  }).filter((q) => q.options.length >= 2 && q.correct.length);
}

const data = {
  stages: parseRoadmap(roadmapMd),
  training: parseTraining(trainingMd),
  questions: quizFiles.flatMap((file, index) => parseQuiz(file, index + 1)),
};

const safeData = JSON.stringify(data).replace(/</g, "\\u003c");
const template = read("study-hub.template.html");
const output = template.replace("__STUDY_DATA__", safeData);
fs.writeFileSync(path.join(root, "study-hub.html"), output);
fs.writeFileSync(path.join(root, "index.html"), output);
console.log(`Built index.html and study-hub.html with ${data.stages.length} stages, ${data.training.reduce((n, s) => n + s.cards.length, 0)} lesson cards, and ${data.questions.length} questions.`);
