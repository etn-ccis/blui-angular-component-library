import { NgModule, SecurityContext } from '@angular/core';
import { ScaffoldComponent } from './scaffold/scaffold.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { KnobTextComponent } from './knobs/knob-text.component';
import { AppCommonComponentsModule } from '../../../components/components.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [KnobTextComponent, ScaffoldComponent],
    imports: [
        AppCommonComponentsModule,
        CommonModule,
        HttpClientModule,
        MatFormFieldModule,
        MatInputModule,
        MatTabsModule,
        FormsModule,
        MatButtonModule,
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
    ],
    exports: [
        AppCommonComponentsModule,
        KnobTextComponent,
        ScaffoldComponent,
        MarkdownModule,
        MatButtonModule,
        CommonModule,
    ],
})
export class SharedCompDocsModule {}
