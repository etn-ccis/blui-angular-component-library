import { Component } from '@angular/core';

export const WITH_CUSTOM_CONTENT = `<blui-drawer style="width: 250px" class="drawer-header-with-custom-content">
    <blui-drawer-header>
        <div blui-title-content style="display: flex; align-items: flex-start; justify-content: center; flex-direction: column">
            <div class="mat-h4" style="margin-bottom: 0">API Documentation</div>
            <blui-list-item-tag backgroundColor="white" fontColor="#007bc1" label="v1.50.8"></blui-list-item-tag>
        </div>
        <button mat-icon-button blui-icon>
            <mat-icon>menu</mat-icon>
        </button>
    </blui-drawer-header> 
</blui-drawer>
`;

@Component({
    selector: 'app-with-custom-content-drawer-header-demo',
    template: WITH_CUSTOM_CONTENT,
    styles: [
        `
            ::ng-deep .drawer-header-with-custom-content .blui-drawer-header-background {
                background-image: url('../../../../../../../assets/topology_40.png');
            }
        `,
    ],
})
export class WithCustomContentComponent {}
