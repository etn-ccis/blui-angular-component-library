import { ChangeDetectionStrategy, Component, Input, OnChanges, ViewEncapsulation } from '@angular/core';
import { requireInput } from '../../utils/utils';

/** [ChannelValue Component](https://brightlayer-ui-components.github.io/angular/?path=/info/components-channel-value--readme)
 *
 * Displays a value/unit combination.
 * These are used as part of the HeroComponent but can also be used inline.
 * */
@Component({
    selector: 'blui-channel-value',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <span class="blui-channel-value-content" [style.color]="color">
            <span class="blui-channel-value-icon-wrapper">
                <ng-content></ng-content>
            </span>
            <div *ngIf="units && prefix" class="blui-channel-value-units">{{ units }}</div>
            <div *ngIf="value" class="blui-channel-value-value">{{ value }}</div>
            <div *ngIf="units && !prefix" class="blui-channel-value-units">{{ units }}</div>
        </span>
    `,
    styleUrls: ['./channel-value.component.scss'],
    host: {
        class: 'blui-channel-value',
    },
})
export class ChannelValueComponent implements OnChanges {
    /** If true, shows units before the value
     *
     * @default false
     * */
    @Input() prefix = false;
    /** The text to display for the units (light text) */
    @Input() units: string;
    /** The text to display for the value (bold text)*/
    @Input() value: string | number;
    /** Text color */
    @Input() color: string;

    ngOnChanges(): void {
        requireInput<ChannelValueComponent>(['value'], this);
    }
}
