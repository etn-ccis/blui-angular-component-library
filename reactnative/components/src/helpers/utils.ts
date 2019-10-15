export const interleave = <TElement, TSeparator>(array: Array<TElement>, separator: () => TSeparator) => {
  const output: Array<TSeparator | TElement> = [];

  array.forEach((element, index) => {
    if (index) {
      output.push(separator());
    }

    output.push(element);
  });

  return output;
};

export type LabeledArrays<T> = { [label: string]: Array<T> };
export const groupBy = <T>(getGroup: (data: T) => string, array: Array<T>): LabeledArrays<T> => {
    const groups: LabeledArrays<T> = {};

    array.forEach(element => {
      const label = getGroup(element);

      if (groups[label]) {
        groups[label].push(element);
      } else {
        groups[label] = [element];
      }
    });

    return groups;
  }
