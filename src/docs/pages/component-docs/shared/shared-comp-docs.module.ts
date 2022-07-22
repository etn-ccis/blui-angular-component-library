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
import { ToggleCodeButtonComponent } from './toggle-code-button/toggle-code-button.component';
import {ExampleCodeComponent} from "./example-code/example-code.component";

@NgModule({
    declarations: [KnobTextComponent, ScaffoldComponent, ToggleCodeButtonComponent, ExampleCodeComponent],
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
        ExampleCodeComponent,
        ToggleCodeButtonComponent,
        AppCommonComponentsModule,
        KnobTextComponent,
        ScaffoldComponent,
        MarkdownModule,
        MatButtonModule,
        CommonModule,
    ],
})
export class SharedCompDocsModule {}
