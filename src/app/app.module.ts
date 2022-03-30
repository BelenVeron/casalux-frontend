import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { NavComponent } from './components/nav/nav.component';
import { BodyComponent } from './components/body/body.component';
import { ButtonComponent } from './components/button/button.component';
import { TitleComponent } from './components/title/title.component';
import { ImageComponent } from './components/image/image.component';
import { DescriptionComponent } from './components/description/description.component';
import { ModalComponent } from './components/modal/modal.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { SwiperModule } from 'swiper/angular';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavComponent,
    BodyComponent,
    ButtonComponent,
    TitleComponent,
    ImageComponent,
    DescriptionComponent,
    ModalComponent,
    CheckboxComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
