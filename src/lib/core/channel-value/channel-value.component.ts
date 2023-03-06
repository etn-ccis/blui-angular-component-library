import { ChangeDetectionStrategy, Component, Input, OnChanges, ViewEncapsulation } from '@angular/core';
import { requireInput } from '../../utils/utils';

export type UnitSpaceType = 'show' | 'hide' | 'auto';
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
            <div
                *ngIf="units && prefix"
                class="blui-channel-value-units"
                [class.blui-channel-value-units-prefix]="!isWhiteListedUnit || unitSpace === 'show'"
            >
                {{ units }}
            </div>
            <div
                *ngIf="getValueAsString()"
                class="blui-channel-value-value"
                [class.blui-channel-value-remove-space]="unitSpace === 'hide'"
            >
                {{ getValueAsString() }}
            </div>
            <div
                *ngIf="units && !prefix"
                class="blui-channel-value-units"
                [class.blui-channel-value-units-suffix]="!isWhiteListedUnit || unitSpace === 'show'"
            >
                {{ units }}
            </div>
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
    getValueAsString(): string {
        return String(this.value);
    }
}
