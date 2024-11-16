import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { HomePageComponent } from './components/home-page/home-page.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HomePageComponent
  ],
  imports: [
    IonicModule,
    TranslateModule
  ],
  exports: [
    NavbarComponent,
    HomePageComponent
  ]
})
export class CommonModule { }
