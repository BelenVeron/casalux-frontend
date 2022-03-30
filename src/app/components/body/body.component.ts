import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/item';
import { Kitchen } from 'src/app/models/kitchen';
import { Photo } from 'src/app/models/photo';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  @Input() items: Item[] = [];
  @Input() itemSelected!: Item;
  @Input() kitchenSelected!: Kitchen;
  @Input() kitchens: Kitchen[] = []
  imageContainerURL = environment.imageContainerURL;
  @Input() photoSelected!: Photo;
  @Input() active: boolean[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Set photos in the vertical gallery, depend the
   * number in the collection.
   * And set the active.
   * 
   * @param id 
   * @param i 
   */
  setItem(id: string, i:number): void {
    this.items.map(item => {
      if (item.id == id){
        this.itemSelected = item;
        this.setKitchens();
      }
    })
    this.active = [];
    for (let index = 0; index < this.items.length; index++) {
      (index == i)?this.active[index]=true:this.active[index]=false
    }
  }

  /**
   * Set kitchens, selected kitchen and photo
   */
  setKitchens(): void {
    this.kitchens = [];
    this.itemSelected.kitchens.map(kitchen => {
      this.kitchens.push(kitchen);
    })
    this.kitchenSelected = this.kitchens[0];
    this.photoSelected = this.kitchens[0].photos[0];
  }

  /**
   * Set photo in the horizontal gallery, depend
   * of the number in the kitchen
   * 
   * @param data 
   */
  setKitchen(data: any): void {
    console.log(data.photos)
    this.itemSelected.kitchens.map(kitchen => {
      if (kitchen.id == data.id){
        this.kitchenSelected = kitchen;
        console.log(this.kitchenSelected.photos)
      }
    });
  }

}
