import { describe, it, expect } from "vitest";
import { STUDY_SECTIONS, BIBLICAL_LEXICON } from "./study-data";

describe("study-data", () => {
  it("contains all 7 structured study sections", () => {
    expect(STUDY_SECTIONS).toHaveLength(7);
  });

  it("ensures each section has valid IDs, titles, and exposition paragraphs", () => {
    for (const section of STUDY_SECTIONS) {
      expect(section.id).toBeTruthy();
      expect(section.number).toBeTruthy();
      expect(section.title).toBeTruthy();
      expect(section.subtitle).toBeTruthy();
      expect(section.summary).toBeTruthy();
      expect(section.detailedExposition.length).toBeGreaterThan(0);
    }
  });

  it("contains rich biblical lexicon entries with Greek and Hebrew scripts", () => {
    expect(BIBLICAL_LEXICON.length).toBeGreaterThanOrEqual(8);
    for (const entry of BIBLICAL_LEXICON) {
      expect(entry.term).toBeTruthy();
      expect(entry.original).toBeTruthy();
      expect(entry.transliteration).toBeTruthy();
      expect(entry.definition).toBeTruthy();
      expect(entry.scriptureReference).toBeTruthy();
    }
  });
});
