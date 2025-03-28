import { Component, HostListener } from '@angular/core';
import { TimelineItem } from '../../interfaces/timeline-item.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  public getScreenWidth: any = window.innerWidth;
	public getScreenHeight: any = window.innerWidth;

  jobs: TimelineItem[] = [
    {
      title: "Job Informatica",
      description: "FrontEnd Developer",
      startDate: new Date("08-01-2024"),
      endDate: new Date("31-03-2025"),
      thumbnail: "jobinformatica.png",
      externalLink: "https://www.jobinformatica.com/en/"
    },
    {
      title: "Argentea",
      description: "FrontEnd Developer",
      startDate: new Date("14-03-2025"),
      thumbnail: "argentea.png",
      externalLink: "https://www.argentea.it/"
    }
  ]

  studies: TimelineItem[] = [
    {
      title: "University of Trento",
      description: "Bachelor Degree",
      startDate: new Date("01-09-2020"),
      endDate: new Date("13-03-2024"),
      thumbnail: "unitn.png",
      externalLink: "https://www.unitn.it/en"
    },
    {
      title: "ITT Vittorio Veneto",
      description: "High School",
      startDate: new Date("14-03-2025"),
      thumbnail: "iis.png",
      externalLink: "https://www.iisvittorioveneto.edu.it/"
    }
  ]

  @HostListener('window:resize', ['$event'])
	onWindowResize() {
		this.getScreenWidth = window.innerWidth;
		this.getScreenHeight = window.innerHeight;
	}

}
