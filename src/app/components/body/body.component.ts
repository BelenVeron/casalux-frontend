import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { Photo } from 'src/app/models/photo';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  @Input() item!: Item;
  @Input() kitchenSelected: string = '';
  srcGalleryImage: string = '';
  imageContainerURL = environment.imageContainerURL;
  @Input() photos: Photo[] = [];
  @Input() photo!: Photo;
  @Input() active: boolean[] = [true];

  constructor() { }

  ngOnInit(): void {
  }

  setPhotos(id: string, i:number): void {
   this.item.kitchens.map(item => {
      if (item.id == id){
        this.photos = item.photos;
        this.photo = item.photos[0];
        this.kitchenSelected = item.name;
      }
    })
    this.active = [];
    for (let index = 0; index < this.item.kitchens.length; index++) {
      (index == i)?this.active[index]=true:this.active[index]=false
    }
  }

  setPhoto(id: string): void {
   this.photos.map(item => {
      if (item.id == id){
        this.photo = item;
      }
    })
  }

}
