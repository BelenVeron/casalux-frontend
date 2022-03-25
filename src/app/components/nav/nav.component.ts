import { Component, Input, OnInit } from '@angular/core';
import { ItemButton } from 'src/app/models/item-button';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Input() itemButtons: ItemButton[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
