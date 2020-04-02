import {ComponentFixture} from "@angular/core/testing";

// Using a selector, counts the number of instances.
export const count = (fixture: ComponentFixture<any>, selector: string, expected = 1): void => {
    const found = fixture.nativeElement.querySelectorAll(selector);
    expect(found.length).toBe(expected, `Expected ${expected} instances of '${selector}', but found ${count.length}`);
};