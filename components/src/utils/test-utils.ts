import { ComponentFixture } from '@angular/core/testing';

// Using a selector, counts the number of instances.
export const count = (fixture: ComponentFixture<any>, selector: string, expected = 1): void => {
    const instances = fixture.nativeElement.querySelectorAll(selector);
    const length: string = instances.length;
    void expect(instances.length).toBe(
        expected,
        `Expected ${expected} instances of '${selector}', but found ${length}`
    );
};
