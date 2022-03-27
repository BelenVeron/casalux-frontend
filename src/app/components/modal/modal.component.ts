import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() active: string = 'active';

  constructor() { }

  ngOnInit(): void {
  }

  close(): void {
    this.active = '';
  }

}
