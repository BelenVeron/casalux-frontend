import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FavoriteCollection } from 'src/app/models/favorite/favorite-collection';
import { FavoritePhoto } from 'src/app/models/favorite/favorite-photo';
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
  srcGalleryImage: string = '';
  imageContainerURL = environment.imageContainerURL;
  @Input() photoSelected!: Photo;
  @Input() active: boolean[] = [];
  @Input() favoriteItem!: FavoriteCollection;
  @Input() favoritePhoto!: FavoritePhoto;
  @Output() sendFavoriteItem: EventEmitter<FavoriteCollection> = new EventEmitter();
  
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

  setKitchens(): void {
    this.kitchens = [];
    this.itemSelected.kitchens.map(kitchen => {
      this.kitchens.push(kitchen);
    })
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

  /**
   * Set if the photo had selected in favorite
   */
  setFavoritePhoto(): void {
    this.favoriteItem.kitchens.map(favoriteKitchen => {
      if (favoriteKitchen.id == this.kitchenSelected.id) {
        favoriteKitchen.photos.map(favoritePhoto => {
          if (favoritePhoto.id == this.photoSelected.id) {
            this.favoritePhoto = favoritePhoto;
          }
        })
      }
    })
  }

  /**
   * Emit an event with the item in favorite
   * @param event 
   */
  sendFavoritePhoto(event: any): void {
    this.favoritePhoto.favorite = event
    this.favoriteItem.kitchens.map(favoriteKitchen => {
      if (favoriteKitchen.id == this.kitchenSelected.id) {
        favoriteKitchen.photos.map(favoritePhoto => {
          if (favoritePhoto.id == this.favoritePhoto.id) {
            favoritePhoto.favorite = this.favoritePhoto.favorite;
          }
        })
      }
    })
    this.sendFavoriteItem.emit(this.favoriteItem);
  }

  onSwiper(swiper:any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

}
