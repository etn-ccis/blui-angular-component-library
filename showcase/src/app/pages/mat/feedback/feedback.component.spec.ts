import { MatFeedackComponent } from './feedback.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatLegacySnackBarRef as MatSnackBarRef } from '@angular/material/legacy-snack-bar';
import { MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { AppModule } from '../../../app.module';

describe('MatFeedackComponent', () => {
    let component: MatFeedackComponent;
    let fixture: ComponentFixture<MatFeedackComponent>;
    const mockBottomSheetRef = {
        open: jasmine.createSpy('open'),
        dismiss: jasmine.createSpy('dismiss'),
    };

    const mockDialogRef = {
        open: jasmine.createSpy('open'),
    };

    const mockSnackbarRef = {
        open: jasmine.createSpy('open'),
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppModule],
            providers: [
                {
                    provide: MatDialogRef,
                    useValue: mockDialogRef,
                },
                {
                    provide: MatBottomSheetRef,
                    useValue: mockBottomSheetRef,
                },
                {
                    provide: MatSnackBarRef,
                    useValue: mockSnackbarRef,
                },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MatFeedackComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        void expect(component).toBeTruthy();
    });

    it('should show bottom sheet on button press', () => {
        const bottomSheetBtn = document.getElementsByClassName('bottom-sheet-button')[0];
        const mouseEvent = new MouseEvent('click');
        bottomSheetBtn.dispatchEvent(mouseEvent);
        fixture.detectChanges();
        const bottomSheet = document.getElementsByTagName('mat-bottom-sheet-container');
        void expect(bottomSheet).toBeTruthy();
    });

    it('should show dialog on button press', () => {
        const dialogBtn = document.getElementsByClassName('dialog-button')[0];
        const mouseEvent = new MouseEvent('click');
        dialogBtn.dispatchEvent(mouseEvent);
        fixture.detectChanges();
        const dialogContainer = document.getElementsByTagName('mat-dialog-container');
        void expect(dialogContainer).toBeTruthy();
    });

    it('should show snackbar on button press', () => {
        const snackBarBtn = document.getElementsByClassName('snackbar-button')[0];
        const mouseEvent = new MouseEvent('click');
        snackBarBtn.dispatchEvent(mouseEvent);
        fixture.detectChanges();
        const snackBarContainer = document.getElementsByTagName('snack-bar-container');
        void expect(snackBarContainer).toBeTruthy();
    });
});
