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

  constructor(
    private collectionService: CollectionService
  ) { }

  ngOnInit(): void {
    this.getItems();
  }

  setItem(id: number): void {
    this.item = this.items[id];
  }

  setItemButton(): void {
    this.items.forEach(item => {
      this.itemButtons.push(new ItemButton(
        item.id,
        item.name
      ))
    });
  }

  setImageUrl(data: Item[]): void {
    data.forEach(item => {

    })
  }

  getItems(): void {
    this.collectionService.get().subscribe(
      data => {
        this.items = data;
        this.setImageUrl(data);
        this.setItemButton();
        if (data.length) {
          this.setItem(0);
        }
        console.log("Index:")
        console.log(this.items)
      },
      err => {
       
      }
    )
  }

}
