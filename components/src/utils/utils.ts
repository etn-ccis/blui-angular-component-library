import {ElementRef, ViewChild} from '@angular/core';

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
            console.warn(`PXBlue ${component.constructor.name} error: Selector "${contentPair.selector}" is required.`);
        }
    });
}

export function isEmptyView(el: ElementRef): boolean {
    return !el || !el.nativeElement || !el.nativeElement.children || el.nativeElement.children.length === 0;
}

export type ContentPair = {
    selector: string;
    ref: ElementRef;
};
