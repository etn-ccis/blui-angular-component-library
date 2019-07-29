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
