import { text } from '@storybook/addon-knobs';

export const withSubtitle = (): any => ({
    template: `
          <div style="width: 800px">
            <pxb-info-list-item [title]="title" [subtitle]="subtitle"></pxb-info-list-item>
          </div>
      `,
    props: {
        title: text('title', 'Info List Item title'),
        subtitle: text('subtitle', 'Info List Item subtitle'),
    },
});
