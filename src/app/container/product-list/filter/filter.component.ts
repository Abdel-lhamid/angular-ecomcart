import { Component, Input, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input()
  all: number;
  @Input()
  inStock: number;
  @Input()
  outOfstock: number;

  @Output()
  selectedFilterRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>();
  
  @Output()
  selectedFilterRadioButton: string = 'all';

  onSelectedFilterRadioButtonChanged(){
    console.log('happened')
    this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton);
  }

}
