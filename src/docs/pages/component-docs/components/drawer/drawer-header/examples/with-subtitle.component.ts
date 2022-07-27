import { Component } from '@angular/core';

export const WITH_SUBTITLE = `<blui-drawer style="width: 250px">
    <blui-drawer-body>
        <blui-drawer-header title="Title" subtitle="Subtitle">
        </blui-drawer-header>
    </blui-drawer-body>
</blui-drawer>
`;

@Component({
    selector: 'app-with-subtitle-drawer-header-demo',
    template: WITH_SUBTITLE,
})
export class WithSubtitleComponent {}
