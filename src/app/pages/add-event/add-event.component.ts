import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-add-event',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Import ReactiveFormsModule
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {
  addEventForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private eventService: EventService,
    private router: Router
  ) {
    this.addEventForm = this.fb.group({
      name: ['', Validators.required],
      detail: ['', Validators.required],
      category: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.addEventForm.valid) {
      this.eventService.addEvent(this.addEventForm.value).subscribe(response => {
        console.log('Event added successfully', response);
        this.router.navigate(['/events']); // Redirect to the Events page
      });
    }
  }
}
