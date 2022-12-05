import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit,OnChanges {
  name:string="";
  @Output() eventChange:EventEmitter<string>=new EventEmitter<string>;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  
  change(nameChange:string):void{
    this.name=nameChange;
    this.eventChange.emit(this.name);
  }

}
