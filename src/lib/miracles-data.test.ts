import { describe, it, expect } from "vitest";
import { MIRACLES_DATA } from "./miracles-data";

describe("miracles-data", () => {
  it("should have at least 8 miracles defined", () => {
    expect(MIRACLES_DATA.length).toBeGreaterThanOrEqual(8);
  });

  it("should validate all miracles have required properties", () => {
    const validCategories = ["nature", "healing", "provision", "resurrection"];
    MIRACLES_DATA.forEach((miracle) => {
      expect(miracle.id).toBeTruthy();
      expect(miracle.title).toBeTruthy();
      expect(validCategories).toContain(miracle.category);
      expect(miracle.scriptureReference).toBeTruthy();
      expect(miracle.location).toBeTruthy();
      expect(miracle.summary).toBeTruthy();
      expect(miracle.story.length).toBeGreaterThan(50);
      expect(miracle.whatItReveals.length).toBeGreaterThan(30);
      expect(miracle.takeaway.length).toBeGreaterThan(20);
    });
  });

  it("should cover all miracle categories", () => {
    const categories = new Set(MIRACLES_DATA.map((m) => m.category));
    expect(categories.has("nature")).toBe(true);
    expect(categories.has("healing")).toBe(true);
    expect(categories.has("provision")).toBe(true);
    expect(categories.has("resurrection")).toBe(true);
  });
});
