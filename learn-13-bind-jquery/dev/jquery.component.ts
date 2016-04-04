import {Component, ElementRef, OnInit} from 'angular2/core';
declare var jQuery: any;

@Component({
    selector: 'my-jquery',
    template: `
        <button>CLick me</button>
    `
})

export class jQueryComponent implements OnInit{
    constructor(private _elRef: ElementRef) {}

    ngOnInit(): any{
        jQuery(this._elRef.nativeElement).find('button').on('click', function () {
            alert("jQuery works !");
        });
    }
}