import {color} from "@storybook/addon-knobs";
import * as Colors from "@pxblue/colors";

export const withIconColor = (): any => ({
    template: `
          <pxb-hero [label]="'Temperature'" [value]="38" [units]="'°C'">
             <i primary [style.color]="iconColor" [style.backgroundColor]="iconBg" class="pxb-temp"></i>
          </pxb-hero>
      `,
    props: {
        iconColor: color('primary.style.color', Colors.red[500]),
        // iconBg: color('primary.style.backgroundColor', Colors.white[500])
    },
});