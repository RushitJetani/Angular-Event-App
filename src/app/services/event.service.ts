import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define the response structure
interface EventResponse {
  success: boolean;
  payload: any[]; // Array of events
}

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private apiUrl = 'https://product-app-74q6.onrender.com/events';

  constructor(private http: HttpClient) {}

  // Use the EventResponse type
  getEvents(): Observable<EventResponse> {
    return this.http.get<EventResponse>(this.apiUrl);
  }

  addEvent(event: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, event);
  }
}
