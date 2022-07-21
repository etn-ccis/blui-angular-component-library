import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class MarkdownSplitService {
    splitWithTail(str: string, delim: string, count: number): string[] {
        const parts = str.split(delim);
        const tail = parts.slice(count).join(delim);
        const result = parts.slice(0, count);
        result.push(tail);
        return result;
    }

    subsection(str: string, topDelim: string, bottomDelim?: string): string {
        const parts = str.split(topDelim);
        let tail = parts.slice(1).join(topDelim);
        tail = topDelim + tail;
        if (bottomDelim) {
            const offBottom = tail.split(bottomDelim)[0];
            return offBottom;
        }
        return tail;

        /*
        const parts = str.split(bottomDelim);
        const tail = parts.slice(1).join(bottomDelim);
        const result = parts.slice(0, 1);
        result.push(tail);
        return result[1]; */
    }
}
