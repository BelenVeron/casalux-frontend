import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Pagination, Navigation } from "swiper";
import { environment } from 'src/environments/environment';
import { Photo } from 'src/app/models/photo';
import { Kitchen } from 'src/app/models/kitchen';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  imageContainerURL = environment.imageContainerURL;
  @Input() photos: Photo[] = [];
  @Input() kitchens: Kitchen[] = [];
  @Input() type: string = '';
  @Output() sendKitchensEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSwiper(swiper:any) {
    console.log(swiper);
  }
  onSlideChange(swiper:any) {
    console.log('slide change', swiper);
  }

  sendKitchen(data:any){
    console.log('slider', data)
    this.sendKitchensEvent.emit(data)
  }

}
