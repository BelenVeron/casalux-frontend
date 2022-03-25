import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  @Input() item!: Item;
  srcGalleryImage: string = '';
  imageContainerURL = environment.imageContainerURL;

  constructor() { }

  ngOnInit(): void {
  }

  setGalleryImage(): string {
    /* let image =  this.item.image;
    console.log(this.item);
    this.srcGalleryImage = this.item.image; */
    return 'srcGalleryImage'
  } 

}
