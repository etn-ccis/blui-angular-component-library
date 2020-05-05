export function requireInput<T>(inputs: Array<keyof T>, component): void {
    inputs.forEach((input) => {
        if (component[input] === undefined
            || component[input] === null
            || component[input] === "") {
            // eslint-disable-next-line no-console
            console.warn(`Property "${input}" is required`);
        }
    });
}
