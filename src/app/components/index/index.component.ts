import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemButton } from 'src/app/models/item-button';
import { CollectionService } from 'src/app/services/collection.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  items: Item[] = [];
  itemButtons: ItemButton[] = [];
  item!: Item;
  imageContainerURL = environment.imageContainerURL;
  active:boolean[] = [];

  constructor(
    private collectionService: CollectionService
  ) { }

  ngOnInit(): void {
    this.getItems();
  }

  setItem(id: string): void {
    this.items.map(item => {
      if (item.id == id){
        this.item = item;
      }
    })
    this.active = [];
    this.active.push(true);
  }

  setItemButton(): void {
    this.items.forEach(item => {
      this.itemButtons.push(new ItemButton(
        item.id,
        item.name
      ))
    });
  }


  getItems(): void {
    this.collectionService.get().subscribe(
      data => {
        this.items = data;
        this.setItemButton();
        if (data.length) {
          this.setItem(data[0].id);
        }
      },
      err => {
       
      }
    )
  }

}
