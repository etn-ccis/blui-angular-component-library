import {EventEmitter} from "events";
import {Directive, ElementRef, HostListener, Output} from "@angular/core";

@Directive({
    selector: '[scroll]'
})
export class ScrollDir {
    @Output() setScroll = new EventEmitter();
    private scroll: number;

    constructor(private el: ElementRef) { }

    @HostListener('scroll', ['$event'])
    scrollIt() { this.scroll = (event.srcElement as any).scrollTop }

    reset() {  this.el.nativeElement.scrollTop = this.scroll }
}