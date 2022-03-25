import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  colectionsURL = environment.colectionsURL;

  constructor(
    private httpClient: HttpClient,
    ) { }

  public get(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.colectionsURL);
  }
}
