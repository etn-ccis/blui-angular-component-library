import { NgModule, SecurityContext } from '@angular/core';
import { ScaffoldComponent } from './scaffold/scaffold.component';
import { ListItemTagDocComponent } from './list-item-tag/list-item-tag.component';
import { EmptyStateDocComponent } from './empty-state/empty-state.component';
import { AppCommonComponentsModule } from '../../components/components.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ListItemTagModule } from '@brightlayer-ui/angular-components';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { KnobTextComponent } from './knobs/knob-text.component';

@NgModule({
    declarations: [EmptyStateDocComponent, KnobTextComponent, ListItemTagDocComponent, ScaffoldComponent],
    imports: [
        AppCommonComponentsModule,
        CommonModule,
        HttpClientModule,
        MatFormFieldModule,
        MatInputModule,
        MatTabsModule,
        MarkdownModule.forRoot({
            loader: HttpClientModule,
            sanitize: SecurityContext.NONE,
            markedOptions: {
                provide: MarkedOptions,
                useValue: {
                    gfm: true,
                    breaks: false,
                    pedantic: false,
                    smartLists: true,
                    smartypants: false,
                },
            },
        }),
        ListItemTagModule,
        FormsModule,
    ],
    exports: [EmptyStateDocComponent, KnobTextComponent, ListItemTagDocComponent, ScaffoldComponent],
})
export class ComponentDocsModule {}
