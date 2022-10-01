import { Component } from '@angular/core';

export const WITH_HEROES = `<blui-score-card style="width: 350px" 
    headerTitle="Substation 3"
    headerSubtitle="High Humidity Alarm"
    headerInfo="4 Devices">
    <mat-list blui-body>
        <mat-list-item>Body Content</mat-list-item>
    </mat-list>
    <blui-hero-banner blui-badge>
        <blui-hero label="Temperature" value="98" units="°F" [iconSize]="36">
            <i blui-primary class="blui-temp"></i>
        </blui-hero>
        <blui-hero label="Humidity" value="54" units="%" [iconSize]="36">
            <i blui-primary class="blui-moisture"></i>
        </blui-hero>
    </blui-hero-banner>
    <blui-info-list-item blui-action-row [hidePadding]="true" [dense]="true" [chevron]="true">
        <div blui-title>View Location</div>
    </blui-info-list-item>
</blui-score-card> 
`;

@Component({
    selector: 'app-with-heroes-score-card-demo',
    template: WITH_HEROES,
})
export class WithHeroesComponent {}
