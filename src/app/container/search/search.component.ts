import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = '';

  //1-createan event
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  //the @viewchild 
  //1. read: is it to read the diffrent token from queried elements.
  //2. static: determine when the query is resolved
  //            true is wen the view is initialized(before the first chage detection) for the first time
  //            false if you want it to be resolved after every change detection
  @ViewChild('searchInput') searchInpulElement: ElementRef;

  //2-Raising the event
  
  onSearchTextChanged(){
    //this.searchTextChanged.emit(this.searchText)
  }
  


  updateSearchText(){
    //this.searchText = event.targer.value;
    this.searchText = this.searchInpulElement.nativeElement.value;
    this.searchTextChanged.emit(this.searchText);
  }

}

