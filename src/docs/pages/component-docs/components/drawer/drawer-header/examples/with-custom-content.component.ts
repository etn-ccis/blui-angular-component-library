import { Component } from '@angular/core';

export const WITH_CUSTOM_CONTENT = `<blui-drawer style="width: 250px">
    <blui-drawer-body>
        <blui-drawer-header>
            <div blui-title-content style="display: flex; align-items: start; flex-direction: column">
                   <div class="mat-h4" style="margin-bottom: -8px; margin-top: 8px">Customizable</div>
                   <div class="mat-h2" style="margin: 0">Header Content</div>
            </div>
            <button mat-icon-button blui-icon>
                <mat-icon>menu</mat-icon>
            </button>
        </blui-drawer-header> 
    </blui-drawer-body>
</blui-drawer>
`;

@Component({
    selector: 'app-with-custom-content-drawer-header-demo',
    template: WITH_CUSTOM_CONTENT,
})
export class WithCustomContentComponent {}
