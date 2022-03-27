import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() loader:string='https://media.tenor.com/images/f864cbf3ea7916572605edd3b3fe637f/tenor.gif';
  @Input() height:number=200;
  @Input() width:number=200;
  @Input() src: string = '';
  @Input() type: string = '';
  @Input() text: string = '';
  @Input() active: boolean = false;
  @Input() carousel: boolean[] = [];

  isLoading:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  hideLoader(){
    this.isLoading=false;
  }

}
