import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    NavbarComponent,
    HomePageComponent
  ],
  imports: [
    IonicModule,
    TranslateModule,
    CommonModule
  ],
  exports: [
    NavbarComponent,
    HomePageComponent
  ]
})
export class MyCommonModule { }
