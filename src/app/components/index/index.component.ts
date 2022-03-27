import { Component, OnInit } from '@angular/core';
import { FavoriteCollection } from 'src/app/models/favorite/favorite-collection';
import { FavoriteKitchen } from 'src/app/models/favorite/favorite-kitchen';
import { FavoritePhoto } from 'src/app/models/favorite/favorite-photo';
import { Item } from 'src/app/models/item';
import { ItemButton } from 'src/app/models/item-button';
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
  favoriteItems: FavoriteCollection[] = [];
  itemButtons: ItemButton[] = [];
  item!: Item;
  favoriteItem!: FavoriteCollection;
  imageContainerURL = environment.imageContainerURL;
  active:boolean[] = [];

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
  setItem(id: string): void {
    this.active = [];
    this.items.map(item => {
      if (item.id == id){
        this.item = item;
        this.setFavoriteItem();
        for (let index = 0; index < item.kitchens.length; index++) {
          (index === 0)?this.active.push(true):this.active.push(false);
          
        }
      }
    })
  }

  /**
   * Set the name and id of the items to
   * send to the navigator
   */
  setItemButton(): void {
    this.items.forEach(item => {
      this.itemButtons.push(new ItemButton(
        item.id,
        item.name
      ))
    });
  }


  /**
   * Set favoriteItems with the change selected in
   * the body. Every photo with like clicked is set
   * in the body and send with the event
   * 
   * @param favoriteItemEvent 
   */
  setFavoriteItems(favoriteItemEvent: any): void {
    this.favoriteItems.map(favoriteItem => {
      if (favoriteItem.id === favoriteItemEvent.id) {
        favoriteItem = favoriteItemEvent;
      }
    })
  }

  /**
   * Set favoriteItem to the first of the favoriteItems
   */
  setFavoriteItem(): void {
    let favoriteItems = this.favoriteItems.filter(item => item.id === this.item.id);
    this.favoriteItem = favoriteItems[0];
  }

  /**
   * Set favoriteItems based in the collection
   * This function need setFavoriteKitchen and
   * setFavoritePhotos to set every array
   */
  setFavorites(): void {
    this.items.forEach(collection => {
      this.favoriteItems.push(new FavoriteCollection(
        collection.id,
        this.setFavoriteKitchen(collection.kitchens)
      ));
    });
  }

  setFavoriteKitchen(kitchens: Kitchen[]): FavoriteKitchen[] {
    let favoriteKitchens: FavoriteKitchen[] = [];
    kitchens.forEach(kitchen => {
      favoriteKitchens.push(new FavoriteKitchen (
          kitchen.id,
          this.setFavoritePhotos(kitchen.photos)
        )
      )
    });
    return favoriteKitchens;
  }

  setFavoritePhotos(photos: Photo[]): FavoritePhoto[] {
    let favoritePhotos: FavoritePhoto[] = [];
    photos.forEach(photo => {
      favoritePhotos.push(new FavoritePhoto (
          photo.id,
          false
        )
      )
    })
    return favoritePhotos;
  }


  /**
   * Get items from de api
   */
  getItems(): void {
    this.collectionService.get().subscribe(
      data => {
        this.items = data;
        this.setItemButton();
        this.setFavorites();
        if (data.length) {
          this.setItem(data[0].id);
        }
      },
      err => {
       
      }
    )
  }

}
