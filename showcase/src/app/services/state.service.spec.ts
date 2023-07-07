import { TestBed } from '@angular/core/testing';

import { StateService } from './state.service';

describe('StateService', () => {
    beforeEach(() => void TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: StateService = TestBed.get(StateService);
        void expect(service).toBeTruthy();
    });
});
