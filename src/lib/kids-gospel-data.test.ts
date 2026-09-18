import { describe, it, expect } from "vitest";
import {
  KIDS_GOSPEL_STEPS,
  KIDS_PRAYER,
  KIDS_ACTION_STEPS,
} from "./kids-gospel-data";

describe("kids-gospel-data", () => {
  it("contains 5 kid-friendly steps", () => {
    expect(KIDS_GOSPEL_STEPS).toHaveLength(5);
  });

  it("ensures each kid step has an emoji, badge, kid analogy, memory verse, and valid quiz", () => {
    for (const step of KIDS_GOSPEL_STEPS) {
      expect(step.emoji).toBeTruthy();
      expect(step.badge).toBeTruthy();
      expect(step.title).toBeTruthy();
      expect(step.kidAnalogy).toBeTruthy();
      expect(step.memoryVerse.reference).toBeTruthy();
      expect(step.memoryVerse.text).toBeTruthy();
      expect(step.funFact).toBeTruthy();
      expect(step.quiz.question).toBeTruthy();
      expect(step.quiz.options.length).toBeGreaterThanOrEqual(3);
      expect(step.quiz.correctIndex).toBeGreaterThanOrEqual(0);
      expect(step.quiz.correctIndex).toBeLessThan(step.quiz.options.length);
      expect(step.quiz.explanation).toBeTruthy();
    }
  });

  it("has a valid children prayer and 4 action steps", () => {
    expect(KIDS_PRAYER.title).toBeTruthy();
    expect(KIDS_PRAYER.text).toContain("Dear Jesus");
    expect(KIDS_ACTION_STEPS).toHaveLength(4);
    for (const action of KIDS_ACTION_STEPS) {
      expect(action.emoji).toBeTruthy();
      expect(action.title).toBeTruthy();
      expect(action.text).toBeTruthy();
    }
  });
});
