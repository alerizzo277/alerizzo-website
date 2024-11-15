import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    IonicModule,
    TranslateModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class CommonModule { }
