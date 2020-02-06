import { interleave, groupBy } from './utils';

describe('utils', () => {
  describe('interleave', () => {
    it('returns an empty array if passed an empty array', () => {
      const output = interleave([], () => ' ');

      expect(output).toEqual([]);
    });

    it('interleaves the separator into the array', () => {
      const output = interleave([1, 2 ,3], () => ' ');

      expect(output).toEqual([1, ' ', 2, ' ', 3]);
    })
  });

  describe('groupBy', () => {
    const getFirstLetter = (str: string) => str.slice(0, 1);

    it('returns an empty object when given an empty array', () => {
      const groups = groupBy(getFirstLetter, []);

      expect(groups).toEqual({});
    });

    it('creates mappings of label to array matching it', () => {
      const groups = groupBy(getFirstLetter, [
        'abc',
        'aaa',
        'bcd'
      ]);

      expect(groups).toEqual({
        a: ['abc', 'aaa'],
        b: ['bcd']
      });
    });
  });
});