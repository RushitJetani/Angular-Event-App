import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent {
  @Input() event: any; // Accept event data from the parent component
}
