import { describe, it, expect } from "vitest";
import { GOSPEL_STEPS, SAMPLE_PRAYER, NEXT_STEPS } from "./gospel-data";
import { cn } from "./utils";

describe("utils.cn", () => {
  it("merges classes correctly", () => {
    expect(cn("px-2 py-1", "bg-blue-500", { "text-white": true, "opacity-50": false })).toBe(
      "px-2 py-1 bg-blue-500 text-white"
    );
  });
});

describe("gospel-data", () => {
  it("has exactly 5 core narrative steps", () => {
    expect(GOSPEL_STEPS).toHaveLength(5);
  });

  it("ensures each step has valid translations for key scripture", () => {
    for (const step of GOSPEL_STEPS) {
      expect(step.title).toBeTruthy();
      expect(step.image).toBeTruthy();
      expect(step.keyVerse.reference).toBeTruthy();
      expect(step.keyVerse.translations.ESV).toBeTruthy();
      expect(step.keyVerse.translations.NIV).toBeTruthy();
      expect(step.keyVerse.translations.KJV).toBeTruthy();
      expect(step.takeawayPoints.length).toBeGreaterThan(0);
      expect(step.reflectionQuestion).toBeTruthy();
    }
  });

  it("has a complete sample prayer and next steps", () => {
    expect(SAMPLE_PRAYER.title).toBeTruthy();
    expect(SAMPLE_PRAYER.text).toContain("Lord Jesus");
    expect(NEXT_STEPS.length).toBe(4);
  });
});
