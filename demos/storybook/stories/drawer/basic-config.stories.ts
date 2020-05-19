import * as Colors from '@pxblue/colors';

export const withBasicConfig = (): any => ({
    styles: [
        `
        .basic-config-wrapper {
            width: 360px;
        }
        ::ng-deep pxb-drawer-header .pxb-drawer-header {
            background-color: ${Colors.blue[500]}!important;
            color: #ffffff !important;
        }
    `,
    ],
    template: `
        <div class="basic-config-wrapper">
          <pxb-drawer-header title="Simple Drawer">
            <mat-icon icon style="display: flex; padding-right: 32px;">menu</mat-icon>
          </pxb-drawer-header>
        </div>
      `,
    props: {},
});
