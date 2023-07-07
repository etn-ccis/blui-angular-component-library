import { Component } from '@angular/core';

@Component({
    selector: 'app-blui-typography',
    template: `
        <div style="padding: 16px">
            <table id="type-table">
                <tr>
                    <th>Mat Name</th>
                    <th></th>
                    <th></th>
                    <th>BLUI Name</th>
                </tr>
                <tr>
                    <td>Display 4</td>
                    <td><span class="mat-display-4">Test</span></td>
                    <td><span class="blui-headline-1">Test</span></td>
                    <td>Headline 1</td>
                </tr>
                <tr>
                    <td>Display 3</td>
                    <td><span class="mat-display-3">Test</span></td>
                    <td><span class="blui-headline-2">Test</span></td>
                    <td>Headline 2</td>
                </tr>
                <tr>
                    <td>Display 2</td>
                    <td><span class="mat-display-2">Test</span></td>
                    <td><span class="blui-headline-3">Test</span></td>
                    <td>Headline 3</td>
                </tr>
                <tr>
                    <td>Display 1</td>
                    <td><span class="mat-display-1">Test</span></td>
                    <td><span class="blui-headline-4">Test</span></td>
                    <td>Headline 4</td>
                </tr>

                <tr>
                    <td>Headline</td>
                    <td><span class="mat-headline">Test</span></td>
                    <td><span class="blui-headline-5">Test</span></td>
                    <td>Headline 5</td>
                </tr>
                <tr>
                    <td>Title</td>
                    <td><span class="mat-title">Test</span></td>
                    <td><span class="blui-headline-6">Test</span></td>
                    <td>Headline 6</td>
                </tr>
                <tr>
                    <td>Subheading 2</td>
                    <td><span class="mat-subheading-2">Test</span></td>
                    <td><span class="blui-subtitle-2">Test</span></td>
                    <td>Subtitle 2</td>
                </tr>
                <tr>
                    <td>Subheading 1</td>
                    <td><span class="mat-subheading-1">Test</span></td>
                    <td><span class="blui-subtitle-1">Test</span></td>
                    <td>Subtitle 1</td>
                </tr>
                <tr>
                    <td>Body 1</td>
                    <td><span class="mat-body-1">Test</span></td>
                    <td><span class="blui-body-1">Test</span></td>
                    <td>Body 1</td>
                </tr>
                <tr>
                    <td>Body 2</td>
                    <td><span class="mat-body-2">Test</span></td>
                    <td><span class="blui-body-2">Test</span></td>
                    <td>Body 2</td>
                </tr>
                <tr>
                    <td>Caption</td>
                    <td><span class="mat-caption">Test</span></td>
                    <td><span class="blui-caption">Test</span></td>
                    <td>Caption</td>
                </tr>
                <tr>
                    <td>Button</td>
                    <td><span class="mat-button">Test</span></td>
                    <td><span class="blui-button">Test</span></td>
                    <td>Button</td>
                </tr>
                <tr>
                    <td>Overline</td>
                    <td><span class="mat-overline">Test</span></td>
                    <td><span class="blui-overline">Test</span></td>
                    <td>Overline</td>
                </tr>
            </table>
        </div>
    `,
    styles: [
        `
            .title {
                text-align: center;
                margin-top: 32px;
            }
            .typography-line {
                display: flex;
                justify-content: space-around;
            }
        `,
    ],
})
export class BluiTypographyComponent {}
