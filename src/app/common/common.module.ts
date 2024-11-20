import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CommonModule } from '@angular/common';
import { DocumentsAreaComponent } from './components/documents-area/documents-area.component';
import { ProjectsAreaComponent } from './components/projects-area/projects-area.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavbarComponent,
    HomePageComponent,
    DocumentsAreaComponent
  ],
  imports: [
    IonicModule,
    TranslateModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    NavbarComponent,
    HomePageComponent
  ]
})
export class MyCommonModule { }
