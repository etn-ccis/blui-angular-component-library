import { TestBed } from '@angular/core/testing';

import { DrawerService } from './drawer.service';

describe('DrawerService', () => {
    beforeEach(() => void TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: DrawerService = TestBed.get(DrawerService);
        void expect(service).toBeTruthy();
    });
});
