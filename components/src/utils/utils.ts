import { ElementRef } from '@angular/core';

export function requireInput<T>(inputs: Array<keyof T>, component): void {
    inputs.forEach((input) => {
        if (component[input] === undefined || component[input] === null || component[input] === '') {
            // eslint-disable-next-line no-console
            console.warn(`PXBlue ${component.constructor.name} error: Property "${input}" is required.`);
        }
    });
}

export function requireContent(contentPairs: ContentPair[], component): void {
    contentPairs.forEach((contentPair) => {
        if (!contentPair.ref.nativeElement.children || contentPair.ref.nativeElement.children.length === 0) {
            // eslint-disable-next-line no-console
            console.warn(`PXBlue ${component.constructor.name} error: Property "${contentPair.id}" is required.`);
        }
    });
}

export type ContentPair = {
    id: string;
    ref: ElementRef;
};
