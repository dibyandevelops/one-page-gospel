import { describe, it, expect } from "vitest";
import {
  CHURCH_DIRECTORIES,
  SAMPLE_CHURCHES,
  HEALTHY_CHURCH_MARKS,
} from "./churches-data";

describe("churches-data", () => {
  it("should have reliable church directories with valid URLs", () => {
    expect(CHURCH_DIRECTORIES.length).toBeGreaterThanOrEqual(4);
    CHURCH_DIRECTORIES.forEach((dir) => {
      expect(dir.name).toBeTruthy();
      expect(dir.tagline).toBeTruthy();
      expect(dir.website).toMatch(/^https?:\/\//);
      expect(dir.description).toBeTruthy();
      expect(["Global", "North America", "International"]).toContain(dir.scope);
    });
  });

  it("should contain representative sample churches with locations and links", () => {
    expect(SAMPLE_CHURCHES.length).toBeGreaterThanOrEqual(5);
    SAMPLE_CHURCHES.forEach((church) => {
      expect(church.id).toBeTruthy();
      expect(church.name).toBeTruthy();
      expect(church.city).toBeTruthy();
      expect(church.country).toBeTruthy();
      expect(church.website).toMatch(/^https?:\/\//);
      expect(church.highlight).toBeTruthy();
    });
  });

  it("should contain biblical marks of a healthy church", () => {
    expect(HEALTHY_CHURCH_MARKS.length).toBeGreaterThanOrEqual(5);
    HEALTHY_CHURCH_MARKS.forEach((mark) => {
      expect(mark.title).toBeTruthy();
      expect(mark.scripture).toBeTruthy();
      expect(mark.explanation).toBeTruthy();
      expect(mark.whyItMatters).toBeTruthy();
    });
  });
});
