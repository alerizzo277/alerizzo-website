import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  public getScreenWidth: any = window.innerWidth;
	public getScreenHeight: any = window.innerWidth;

  @HostListener('window:resize', ['$event'])
	onWindowResize() {
		this.getScreenWidth = window.innerWidth;
		this.getScreenHeight = window.innerHeight;
	}

}
