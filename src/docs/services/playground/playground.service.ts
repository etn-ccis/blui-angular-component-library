import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Knob } from '../../pages/component-docs/shared/scaffold/scaffold.component';

@Injectable({
    providedIn: 'root',
})
export class PlaygroundService {
    knobChange = new Subject();

    addOptionalProp<T>(inputs: { [key: string]: Knob }, name: keyof T): string {
        const knob = inputs[name as string];
        if (knob.value === knob.componentDefault) {
            return '';
        }
        const type = knob.type;
        if (type === 'string' || type === 'color' || type === 'select') {
            return `${name}="${knob.value}"`;
        }
        return `[${name}]="${knob.value}"`;
    }

    removeEmptyLines(code: string): string {
        return code.replace(/^\s*$(?:\r\n?|\n)/gm, '');
    }
}
