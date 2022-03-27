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

  @Input() item!: Item;
  @Input() kitchenSelected!: Kitchen;
  srcGalleryImage: string = '';
  imageContainerURL = environment.imageContainerURL;
  @Input() photo!: Photo;
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
  setPhotos(id: string, i:number): void {
   this.item.kitchens.map(item => {
      if (item.id == id){
        this.kitchenSelected = item;
        this.kitchenSelected.photos = item.photos;
        this.photo = item.photos[0];
        this.setFavoritePhoto();
      }
    })
    this.active = [];
    for (let index = 0; index < this.item.kitchens.length; index++) {
      (index == i)?this.active[index]=true:this.active[index]=false
    }
  }

  /**
   * Set photo in the horizontal gallery, depend
   * of the number in the kitchen
   * 
   * @param id 
   */
  setPhoto(id: string): void {
   this.kitchenSelected.photos.map(item => {
      if (item.id == id){
        this.photo = item;
        this.setFavoritePhoto();
      }
    })
  }

  /**
   * Set if the photo had selected in favorite
   */
  setFavoritePhoto(): void {
    this.favoriteItem.kitchens.map(favoriteKitchen => {
      if (favoriteKitchen.id == this.kitchenSelected.id) {
        favoriteKitchen.photos.map(favoritePhoto => {
          if (favoritePhoto.id == this.photo.id) {
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

}
