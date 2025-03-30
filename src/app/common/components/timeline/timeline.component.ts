import { Component, Input } from '@angular/core';
import { TimelineItem } from '../../interfaces/timeline-item.interface'

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  @Input() items: TimelineItem[] = []  
}
