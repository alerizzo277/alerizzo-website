import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CommonModule } from '@angular/common';
import { DocumentsAreaComponent } from './components/documents-area/documents-area.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HomePageComponent,
    DocumentsAreaComponent
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
