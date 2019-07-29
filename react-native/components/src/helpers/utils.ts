export const interleave = <TSeparator>(separator: () => TSeparator) =>
  <TElement>(array: Array<TElement>): Array<TSeparator | TElement> => {
    const output: Array<TSeparator | TElement> = [];

    array.forEach((element, index) => {
      if (index) {
        output.push(separator());
      }

      output.push(element);
    });

    return output;
  }