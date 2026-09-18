import { describe, it, expect } from "vitest";
import { PARABLES_DATA } from "./parables-data";

describe("parables-data", () => {
  it("should have at least 8 parables defined", () => {
    expect(PARABLES_DATA.length).toBeGreaterThanOrEqual(8);
  });

  it("should have valid fields and symbols for every parable", () => {
    const validThemes = ["grace", "kingdom", "humility", "faithfulness"];
    PARABLES_DATA.forEach((parable) => {
      expect(parable.id).toBeTruthy();
      expect(parable.title).toBeTruthy();
      expect(validThemes).toContain(parable.theme);
      expect(parable.scriptureReference).toBeTruthy();
      expect(parable.hookSummary).toBeTruthy();
      expect(parable.context).toBeTruthy();
      expect(parable.story.length).toBeGreaterThan(50);
      expect(parable.symbols.length).toBeGreaterThanOrEqual(2);
      parable.symbols.forEach((sym) => {
        expect(sym.symbol).toBeTruthy();
        expect(sym.meaning).toBeTruthy();
      });
      expect(parable.spiritualMeaning.length).toBeGreaterThan(20);
      expect(parable.modernApplication.length).toBeGreaterThan(20);
      expect(parable.reflectionQuestion).toBeTruthy();
    });
  });
});
