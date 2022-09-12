import { Component } from '@angular/core';
import { BASIC } from './examples/basic.component';
import { LEFT_CONTENT } from './examples/with-left-content.component';
import { ICON } from './examples/with-icon.component';
import { STATUS } from './examples/with-status.component';
import { SUBTITLE } from './examples/with-subtitle.component';
import { RIGHT_CONTENT } from './examples/with-right-content.component';
import { WITHIN_LIST } from './examples/within-list.component';

@Component({
    selector: 'app-info-list-item-doc',
    template: `<app-component-doc-scaffold [md]="md" mdFileName="InfoListItem.md">
        <div examples class="app-example">
            <div class="example-section">
                <div class="example-heading">Basic InfoListItem</div>
                <div class="example-description">
                    The <code>&lt;blui-info-list-item&gt;</code> is intended to be used in List Views. A minimal example
                    accepts a <code>blui-title</code> content.
                </div>
                <div class="example-demo-wrapper">
                    <app-basic-info-list-item-demo></app-basic-info-list-item-demo>
                </div>
                <app-example-code [snippet]="BASIC" dataLine="2"></app-example-code>
                <div class="example-actions">
                    <app-copy-code-button [code]="BASIC"></app-copy-code-button>
                </div>
            </div>
            <div class="example-section">
                <div class="example-heading">InfoListItem with Subtitle</div>
                <div class="example-description">
                    The <code>&lt;blui-info-list-item&gt;</code> accepts an optional <code>blui-subtitle</code>
                    content that appears on the second line.
                </div>
                <div class="example-demo-wrapper">
                    <app-with-subtitle-info-list-item-demo></app-with-subtitle-info-list-item-demo>
                </div>
                <app-example-code [snippet]="SUBTITLE" dataLine="3"></app-example-code>
                <div class="example-actions">
                    <app-copy-code-button [code]="SUBTITLE"></app-copy-code-button>
                </div>
            </div>
            <div class="example-section">
                <div class="example-heading">InfoListItem with Icon</div>
                <div class="example-description">
                    The <code>&lt;blui-info-list-item&gt;</code> accepts an optional <code>blui-icon</code>
                    content that will appear to the left.
                </div>
                <div class="example-demo-wrapper">
                    <app-with-icon-info-list-item-demo></app-with-icon-info-list-item-demo>
                </div>
                <app-example-code [snippet]="ICON" dataLine="4"></app-example-code>
                <div class="example-actions">
                    <app-copy-code-button [code]="ICON"></app-copy-code-button>
                </div>
            </div>
            <div class="example-section">
                <div class="example-heading">InfoListItem with Status</div>
                <div class="example-description">
                    The <code>&lt;blui-info-list-item&gt;</code> accepts an optional <code>statusColor</code> input that
                    adds a status stripe to the left side of the row. This can be paired with the
                    <code>avatar</code> input to add a padding and color around the <code>blui-icon</code>.
                </div>
                <div class="example-demo-wrapper">
                    <app-with-status-info-list-item-demo></app-with-status-info-list-item-demo>
                </div>
                <app-example-code [snippet]="STATUS" dataLine="1, 4"></app-example-code>
                <div class="example-actions">
                    <app-copy-code-button [code]="STATUS"></app-copy-code-button>
                </div>
            </div>
            <div class="example-section">
                <div class="example-heading">InfoListItem with Left Content</div>
                <div class="example-description">
                    The <code>&lt;blui-info-list-item&gt;</code> accepts an optional
                    <code>blui-left-content</code> which renders between a <code>blui-icon</code> and
                    <code>blui-title</code>.
                </div>
                <div class="example-demo-wrapper">
                    <app-with-left-content-info-list-item-demo></app-with-left-content-info-list-item-demo>
                </div>
                <app-example-code [snippet]="LEFT_CONTENT" dataLine="5-8"></app-example-code>
                <div class="example-actions">
                    <app-copy-code-button [code]="LEFT_CONTENT"></app-copy-code-button>
                </div>
            </div>
            <div class="example-section">
                <div class="example-heading">InfoListItem with Right Content</div>
                <div class="example-description">
                    The <code>&lt;blui-info-list-item&gt;</code> accepts an optional <code>blui-right-content</code> at
                    the right edge of the item.
                </div>
                <div class="example-demo-wrapper">
                    <app-with-right-content-info-list-item-demo></app-with-right-content-info-list-item-demo>
                </div>
                <app-example-code [snippet]="RIGHT_CONTENT" dataLine="5"></app-example-code>
                <div class="example-actions">
                    <app-copy-code-button [code]="RIGHT_CONTENT"></app-copy-code-button>
                </div>
            </div>
            <div class="example-section">
                <div class="example-heading">InfoListItem in a List</div>
                <div class="example-description">
                    The <code>&lt;blui-info-list-item&gt;</code> typically appear in a list which contains multiple rows
                    of data.
                </div>
                <div class="example-demo-wrapper">
                    <app-within-list-info-list-item-demo></app-within-list-info-list-item-demo>
                </div>
                <app-example-code [snippet]="WITHIN_LIST"></app-example-code>
                <div class="example-actions">
                    <app-copy-code-button [code]="WITHIN_LIST"></app-copy-code-button>
                </div>
            </div>
        </div>
    </app-component-doc-scaffold> `,
    styleUrls: ['./info-list-item-doc.component.scss'],
})
export class InfoListItemDocComponent {
    md: string;
    BASIC = BASIC;
    SUBTITLE = SUBTITLE;
    STATUS = STATUS;
    ICON = ICON;
    LEFT_CONTENT = LEFT_CONTENT;
    RIGHT_CONTENT = RIGHT_CONTENT;
    WITHIN_LIST = WITHIN_LIST;
}
