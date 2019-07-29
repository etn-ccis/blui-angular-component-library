import { interleave } from "./utils";

describe('utils', () => {
  describe('interleave', () => {
    const interleaveWithSpaces = interleave(() => ' ');

    it('returns an empty array if passed an empty array', () => {
      const output = interleaveWithSpaces([]);

      expect(output).toEqual([]);
    });

    it('interleaves the separator into the array', () => {
      const output = interleaveWithSpaces([1, 2 ,3]);

      expect(output).toEqual([1, ' ', 2, ' ', 3]);
    })
  });
});