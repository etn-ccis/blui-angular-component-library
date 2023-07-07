import { Component, ViewEncapsulation } from '@angular/core';
import { UntypedFormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class AlwaysErrorState implements ErrorStateMatcher {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        return true;
    }
}

@Component({
    selector: 'app-mat-inputs',
    templateUrl: './inputs.component.html',
    styleUrls: ['./inputs.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class MatInputsComponent {
    errorMatcher = new AlwaysErrorState();
    errorControl: UntypedFormControl = new UntypedFormControl('', [Validators.required]);
}
