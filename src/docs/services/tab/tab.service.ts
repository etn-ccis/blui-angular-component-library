import { Injectable } from '@angular/core';
import { Tab } from '../../pages/component-docs/shared/scaffold/scaffold.component';

@Injectable({
    providedIn: 'root',
})
export class TabService {
    private tab: Tab = 'examples';

    setActiveTab(tab: Tab): void {
        this.tab = tab;
    }

    getPreviousTab(): Tab {
        return this.tab;
    }
}
