import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlaygroundService } from '../../../../../services/playground/playground.service';
import { Knob } from '../../../shared/scaffold/scaffold.component';

export type AppBarPlaygroundKnobs = {
    collapsedHeight: Knob;
    expandedHeight: Knob;
    color: Knob;
    scrollThreshold: Knob;
    variant: Knob;
};

@Component({
    selector: 'app-app-bar-playground',
    styles: [
        `
            .scroll-container {
                width: 100%;
                max-width: 450px;
                max-height: 400px;
                overflow: auto;
                position: relative;
            }
            .content-body {
                padding: 16px;
                background: white;
            }
        `,
    ],
    template: `<div class="scroll-container" id="app-bar-playground-example">
        <blui-app-bar
            [variant]="inputs.variant.value"
            [expandedHeight]="inputs.expandedHeight.value"
            [collapsedHeight]="inputs.collapsedHeight.value"
            [scrollThreshold]="inputs.scrollThreshold.value"
            [color]="inputs.color.value"
            scrollContainerId="app-bar-playground-example"
            (collapsedChange)="isCollapsed = $event">
            <button blui-icon mat-icon-button style="margin: 0 24px 0 -8px">
                <mat-icon>menu</mat-icon>
            </button>
            <blui-three-liner title="Title" subtitle="Subtitle" info="Info"
                              [style.top.px]="isCollapsed ? 0 : 80">
            </blui-three-liner>
            <div blui-actions style="display: flex; margin: 0 -8px;">
                <mat-icon style="margin: 0 8px">search</mat-icon>
                <mat-icon style="margin: 0 8px">download</mat-icon>
                <mat-icon style="margin: 0 8px">more_vert</mat-icon>
            </div>
        </blui-app-bar>
        <div class="content-body">{{ filler }}</div>
    </div>`,
})
export class PlaygroundComponent implements OnDestroy {
    @Input() inputs: AppBarPlaygroundKnobs;
    @Output() codeChange = new EventEmitter<string>();

    isCollapsed: boolean;
    filler = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis vulputate arcu, quis vulputate mauris aliquet in. Praesent sollicitudin erat at augue cursus, a scelerisque odio tristique. Aenean quis dui in nisi condimentum viverra eleifend sed odio. Vestibulum a lacinia leo. Proin congue purus vulputate metus vestibulum eleifend. Suspendisse sit amet orci magna. Suspendisse eu odio ut purus ultrices ornare id eu dolor. Cras porttitor semper feugiat. Sed vel ultricies risus, vel dignissim arcu. Vestibulum quis interdum sem. Morbi bibendum tortor ligula, non pellentesque ante ullamcorper sed. Duis ornare felis eget justo faucibus, id tristique felis dignissim. Nullam sapien metus, feugiat egestas convallis eu, vehicula et turpis. Phasellus interdum, justo sit amet maximus pellentesque, eros orci dictum diam, id bibendum risus neque non risus.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis vulputate arcu, quis vulputate mauris aliquet in. Praesent sollicitudin erat at augue cursus, a scelerisque odio tristique. Aenean quis dui in nisi condimentum viverra eleifend sed odio. Vestibulum a lacinia leo. Proin congue purus vulputate metus vestibulum eleifend. Suspendisse sit amet orci magna. Suspendisse eu odio ut purus ultrices ornare id eu dolor. Cras porttitor semper feugiat. Sed vel ultricies risus, vel dignissim arcu. Vestibulum quis interdum sem. Morbi bibendum tortor ligula, non pellentesque ante ullamcorper sed. Duis ornare felis eget justo faucibus, id tristique felis dignissim. Nullam sapien metus, feugiat egestas convallis eu, vehicula et turpis. Phasellus interdum, justo sit amet maximus pellentesque, eros orci dictum diam, id bibendum risus neque non risus.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis vulputate arcu, quis vulputate mauris aliquet in. Praesent sollicitudin erat at augue cursus, a scelerisque odio tristique. Aenean quis dui in nisi condimentum viverra eleifend sed odio. Vestibulum a lacinia leo. Proin congue purus vulputate metus vestibulum eleifend. Suspendisse sit amet orci magna. Suspendisse eu odio ut purus ultrices ornare id eu dolor. Cras porttitor semper feugiat. Sed vel ultricies risus, vel dignissim arcu. Vestibulum quis interdum sem. Morbi bibendum tortor ligula, non pellentesque ante ullamcorper sed. Duis ornare felis eget justo faucibus, id tristique felis dignissim. Nullam sapien metus, feugiat egestas convallis eu, vehicula et turpis. Phasellus interdum, justo sit amet maximus pellentesque, eros orci dictum diam, id bibendum risus neque non risus.`;

    knobListener: Subscription;
    open = true;

    constructor(private readonly _playgroundService: PlaygroundService) {
        this.knobListener = this._playgroundService.knobChange.subscribe((updatedKnobs: AppBarPlaygroundKnobs) => {
            this.inputs = updatedKnobs;
            this._emitNewCodeChanges();
        });
    }

    ngAfterViewInit(): void {
        this._emitNewCodeChanges();
    }

    ngOnDestroy(): void {
        if (this.knobListener) {
            this.knobListener.unsubscribe();
        }
    }

    private _emitNewCodeChanges(): void {
        setTimeout(() => {
            this.codeChange.emit(this._createGeneratedCode());
        });
    }

    private _createGeneratedCode(): string {
        const code = `ddd`;

        return this._playgroundService.removeEmptyLines(code);
    }
}
