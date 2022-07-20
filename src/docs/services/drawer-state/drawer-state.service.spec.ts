import { TestBed } from '@angular/core/testing';
import { DrawerStateService } from './drawer-state.service';

describe('DrawerStateService', () => {
    beforeEach(() => void TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: DrawerStateService = TestBed.get(DrawerStateService);
        void expect(service).toBeTruthy();
    });
});
