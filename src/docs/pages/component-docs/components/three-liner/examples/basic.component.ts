import { Component } from '@angular/core';

export const BASIC = `<blui-three-liner
    title="title"
    subtitle="subtitle"
    info="info">
</blui-three-liner>`;

@Component({
    selector: 'app-basic-three-liner',
    template: BASIC,
})
export class BasicExample {}
