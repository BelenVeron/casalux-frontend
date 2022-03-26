import { Component, Input, OnInit } from '@angular/core';
import { Content } from 'src/app/models/content';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  @Input() classDescription: string = 'more';
  @Input() kitchenSelected: string = '';
  @Input() textButton: string = 'SEE MORE';
  @Input() contents: Content[] = [];
  imageContainerURL = environment.imageContainerURL;
  @Input() textDescription: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam finibus lobortis orci. Sed non nulla at nisi sodales iaculis. Donec.';

  constructor() { }

  ngOnInit(): void {
  }

}
