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
      description: "application.timeline.fe-developer",
      startDate: new Date("2024-01-08"),
      endDate: new Date("2025-03-31"),
      thumbnail: "jobinformatica.png",
      externalLink: "https://www.jobinformatica.com/en/"
    },
    {
      title: "Argentea",
      description: "application.timeline.fe-developer",
      startDate: new Date("2025-04-14"),
      thumbnail: "argentea.png",
      externalLink: "https://www.argentea.it/"
    }
  ]

  studies: TimelineItem[] = [
    {
      title: "application.timeline.unitn",
      description: "application.timeline.bachelor-degree",
      startDate: new Date("2020-09-01"),
      endDate: new Date("2024-03-13"),
      thumbnail: "unitn.png",
      externalLink: "https://www.unitn.it/en"
    },
    {
      title: "application.timeline.itt",
      description: "application.timeline.high-school",
      startDate: new Date("2015-09-01"),
      endDate: new Date("2020-06-25"),
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
