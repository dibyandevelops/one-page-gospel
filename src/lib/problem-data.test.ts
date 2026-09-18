import { describe, it, expect } from "vitest";
import { PROBLEM_SECTIONS, SELF_CHECK_QUESTIONS } from "./problem-data";

describe("problem-data", () => {
  it("should have at least 4 problem sections with valid properties", () => {
    expect(PROBLEM_SECTIONS.length).toBeGreaterThanOrEqual(4);
    PROBLEM_SECTIONS.forEach((section) => {
      expect(section.id).toBeDefined();
      expect(section.title).toBeTruthy();
      expect(section.subtitle).toBeTruthy();
      expect(section.summary).toBeTruthy();
      expect(section.keyVerse.reference).toBeTruthy();
      expect(section.keyVerse.text).toBeTruthy();
      expect(section.points.length).toBeGreaterThan(0);
      expect(section.realWorldAnalogy.title).toBeTruthy();
      expect(section.realWorldAnalogy.analogy).toBeTruthy();
    });
  });

  it("should have self-check questions with human thinking and biblical reality", () => {
    expect(SELF_CHECK_QUESTIONS.length).toBeGreaterThanOrEqual(3);
    SELF_CHECK_QUESTIONS.forEach((q) => {
      expect(q.question).toBeTruthy();
      expect(q.humanThinking).toBeTruthy();
      expect(q.biblicalReality).toBeTruthy();
      expect(q.verse).toBeTruthy();
    });
  });
});
