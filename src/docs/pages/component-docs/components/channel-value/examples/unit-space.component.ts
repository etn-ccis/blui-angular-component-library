import { Component } from '@angular/core';

export const UNIT_SPACE = `<div style="display: flex; flex-direction: column">
    <blui-channel-value value="85" units="kWh" style="margin: 2px 0"></blui-channel-value>
    <blui-channel-value value="97" units="°F"  style="margin: 2px 0"></blui-channel-value>
    <blui-channel-value value="32" units="°C"  style="margin: 2px 0"></blui-channel-value>
    <blui-channel-value value="100" units="%"  style="margin: 2px 0"></blui-channel-value>
    <blui-channel-value value="13.62" units="$"  style="margin: 2px 0" [prefix]="true"></blui-channel-value>
</div>`;

@Component({
    selector: 'app-unit-space-channel-value-demo',
    template: UNIT_SPACE,
})
export class UnitSpaceComponent {}
