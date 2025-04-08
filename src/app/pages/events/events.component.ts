import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for *ngFor
import { EventDetailComponent } from '../../components/event-detail/event-detail.component';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, EventDetailComponent], // Include EventDetailComponent
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: any[] = []; // Make sure it's an array

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(data => {
      console.log(data); // Log the response structure for debugging
      if (data.success) {
        this.events = data.payload; // Access the payload array
      } else {
        console.error('Failed to fetch events.');
      }
    });
  }
}
