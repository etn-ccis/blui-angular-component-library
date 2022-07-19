import { Component } from '@angular/core';
import { blue, white } from '@brightlayer-ui/colors';
import { ViewportService } from '../../services/viewport/viewport.service';
import { PasswordRequirement, SampleService } from '@blui-lab/angular';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'md-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    bluiBlue = blue;
    bluiWhite = white;
    passesStrengthCheck = false;
    passwordFormControl: FormControl;
    passwordRequirements: PasswordRequirement[];

    constructor(private readonly _viewportService: ViewportService) {}

    ngOnInit(): void {
        this.passwordRequirements = this.createPasswordRequirements();

        this.passwordFormControl = new FormControl('');
    }
    isSmall(): boolean {
        return this._viewportService.isSmall();
    }

    createPasswordRequirements(): PasswordRequirement[] {
        const req: PasswordRequirement[] = [];
        req.push({
            description: 'Must be between 8 and 16 characters',
            regex: /^.{8,16}$/,
        });
        req.push({
            description: 'Must have one number',
            regex: /[0-9]/,
        });
        req.push({
            description: 'Must have uppercase Letter',
            regex: /[A-Z]/,
        });

        return req;
    }
}
