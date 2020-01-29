import '@pxblue/themes/angular/theme.scss'

export const wrap = () => storyFn => {
   const story = storyFn();
   return {
      ...story,
      template: `<div class="pxb-blue">${story.template}</div>`
   };
};
