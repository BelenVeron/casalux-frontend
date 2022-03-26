import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemButton } from 'src/app/models/item-button';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Input() itemButtons: ItemButton[] = [];
  @Output() emitterId: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendId(id: string) {
    this.emitterId.emit(id);
  }

}
