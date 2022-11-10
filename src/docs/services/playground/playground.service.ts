import { Subject } from 'rxjs';
import { Knob } from '../../pages/component-docs/shared/scaffold/scaffold.component';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class PlaygroundService {
    knobChange = new Subject();

    addOptionalProp<T>(inputs: { [key: string]: Knob }, name: keyof T, prefixSpace?: boolean): string {
        const knob = inputs[name as string];
        if (knob.value === knob.componentDefault) {
            return '';
        }
        const type = knob.type;
        const input = String(name);
        if (type === 'string' || type === 'color' || type === 'select') {
            return `${prefixSpace ? ' ' : ''}${input}="${knob.value}"`;
        }
        return `${prefixSpace ? ' ' : ''}[${input}]="${knob.value}"`;
    }

    removeEmptyLines(code: string): string {
        return code.replace(/^\s*$(?:\r\n?|\n)/gm, '');
    }
}
