import { text } from '@storybook/addon-knobs';
// import * from '@pxblue/angular-themes';
import * as Colors from '@pxblue/colors';
import { WITH_MIN_PROPS_STORY_NAME } from '../../src/constants';

export const withBasicConfig = (): any => ({

    template: `
          <pxb-list-item-tag [label]="label"></pxb-list-item-tag>
      `,
    props: {
        label: text('label', 'active'),
        colors: Colors,
    },

});