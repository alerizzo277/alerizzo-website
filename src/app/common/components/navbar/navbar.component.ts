import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TranslactionsLocalStorageService } from './translaction-local-storage.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
	language = 'EN';

	availableLanguages: string[] = ['EN', 'IT'];

	public getScreenWidth: any = window.innerWidth;
	public getScreenHeight: any = window.innerWidth;

	@HostListener('window:resize', ['$event'])
	onWindowResize() {
		this.getScreenWidth = window.innerWidth;
		this.getScreenHeight = window.innerHeight;
	}

	constructor(
		private router: Router,
		private translateService: TranslateService,
		private localStorage: TranslactionsLocalStorageService
	) { }

	ngOnInit() {
		this.availableLanguages.sort((a, b) => (a < b ? -1 : 1));
		let lang = this.localStorage.getItem('aleRizzoWebsiteSelectedLanguage');
		if (lang) {
			this.changeLanguage(lang);
			this.loadedLanguageToDropDown(lang);
		}
	}

	navigate(url: string) {
		void this.router.navigate([url]);
	}

	onSelectLanguageChange() {
		switch (this.language) {
			case 'EN':
				this.changeLanguage('en-GB');
				break;
			case 'IT':
				this.changeLanguage('it-IT');
				break;
		}
	}

	public changeLanguage(localeCode: string): void {
		this.translateService.use(localeCode);
		this.localStorage.setItem('aleRizzoWebsiteSelectedLanguage', localeCode);
	}

	loadedLanguageToDropDown(lang: string) {
		switch (lang) {
			case 'en-GB':
				this.language = 'EN';
				break;
			case 'it-IT':
				this.language = 'IT';
				break;
		}
	}
}
