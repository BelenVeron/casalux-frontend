import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { Kitchen } from 'src/app/models/kitchen';
import { Photo } from 'src/app/models/photo';
import { CollectionService } from 'src/app/services/collection.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  items: Item[] = [];
  item!: Item;
  imageContainerURL = environment.imageContainerURL;
  active:boolean[] = [];
  photoSelected!: Photo;
  kitchenSelected!: Kitchen;
  kitchens: Kitchen[] = []

  constructor(
    private collectionService: CollectionService
  ) { }

  ngOnInit(): void {
    this.getItems();
  }

  /**
   * Set item selected in the navigator, using
   * an event emitted for it
   * 
   * @param id 
   */
  setPhoto(id: string): void {
    this.active = [];
    this.items.map(item => {
      if (item.id == id){
        this.item = item;
        this.setActive();
      }
    })
  }

  setActive(): void {
    for (let index = 0; index < this.items.length; index++) {
      (index === 0)?this.active.push(true):this.active.push(false);
      
    }
  }

  setKitchens(): void {
    this.items[0].kitchens.map(kitchen => {
      this.kitchens.push(kitchen);
    })
  }


  /**
   * Get items from de api
   */
  getItems(): void {
    this.collectionService.get().subscribe(
      data => {
        this.items = data;
        this.setActive();
        if (data.length) {
          this.photoSelected = this.items[0].kitchens[0].photos[0];
          this.kitchenSelected = this.items[0].kitchens[1];
          this.setKitchens();
        }
        console.log(this.items)
      },
      err => {
       
      }
    )
  }

}
