import "@pxblue/themes/angular/theme.scss";
import "typeface-open-sans";

export const wrap = () => (storyFn): any => {
  const story = storyFn();
  return {
    ...story,
    template: `<div class="pxb-blue mat-typography">${story.template}</div>`
  };
};
