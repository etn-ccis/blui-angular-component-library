import { ChangeDetectionStrategy, Component, Input, OnChanges, ViewEncapsulation } from '@angular/core';
import { requireInput } from '../../utils/utils';

type UnitSpaceType = 'show' | 'hide' | 'auto';
/** [ChannelValue Component](https://pxblue-components.github.io/angular/?path=/info/components-channel-value--readme)
 *
 * Displays a value/unit combination.
 * These are used as part of the HeroComponent but can also be used inline.
 * */
@Component({
    selector: 'pxb-channel-value',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <span class="pxb-channel-value-content" [style.color]="color">
            <span class="pxb-channel-value-icon-wrapper">
                <ng-content></ng-content>
            </span>
            <div
                *ngIf="units && prefix"
                class="pxb-channel-value-units"
                [class.pxb-channel-value-units-prefix]="!isWhiteListedUnit || unitSpace === 'show'"
            >
                {{ units }}
            </div>
            <div
                *ngIf="value"
                class="pxb-channel-value-value"
                [class.pxb-channel-value-remove-space]="unitSpace === 'hide'"
            >
                {{ value }}
            </div>
            <div
                *ngIf="units && !prefix"
                class="pxb-channel-value-units"
                [class.pxb-channel-value-units-suffix]="!isWhiteListedUnit || unitSpace === 'show'"
            >
                {{ units }}
            </div>
        </span>
    `,
    styleUrls: ['./channel-value.component.scss'],
    host: {
        class: 'pxb-channel-value',
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
    /** Show a space between the value and units. Can be `show` | `hide` | `auto`
     *
     * `show` - Show a space between the value and units.
     *
     * `hide` - Hide a space between the value and units.
     *
     * `auto` - Shows space except for white list items.
     *
     * prefixUnitWhitelist: ['$']
     *
     * suffixUnitWhitelist: ['%', '℉','°F','℃','°C','°']
     *
     * @default auto;
     * */
    @Input() unitSpace: UnitSpaceType = 'auto';

    prefixUnitWhitelist = ['$'];
    suffixUnitWhitelist = ['%', '℉', '°F', '℃', '°C', '°'];
    isWhiteListedUnit = false;
    ngOnChanges(): void {
        requireInput<ChannelValueComponent>(['value'], this);
        this.isWhiteListedUnit = this.prefix
            ? this.prefixUnitWhitelist.includes(this.units)
            : this.suffixUnitWhitelist.includes(this.units);
    }
}
