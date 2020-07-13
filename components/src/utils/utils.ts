import { ElementRef } from '@angular/core';

export function requireInput<T>(inputs: Array<keyof T>, component: any): void {
    inputs.forEach((input: any) => {
        if (component[input] === undefined || component[input] === null || component[input] === '') {
            const name: string = component.constructor.name;
            // eslint-disable-next-line no-console
            console.warn(`PXBlue ${name} error: Property "${input}" is required.`);
        }
    });
}

export function requireContent(contentPairs: ContentPair[], component: any): void {
    contentPairs.forEach((contentPair) => {
        if (!contentPair.ref.nativeElement.children || contentPair.ref.nativeElement.children.length === 0) {
            const name: string = component.constructor.name;
            // eslint-disable-next-line no-console
            console.warn(`PXBlue ${name} error: Selector "${contentPair.selector}" is required.`);
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
