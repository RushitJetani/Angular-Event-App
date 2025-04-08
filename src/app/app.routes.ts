import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { EventsComponent } from './pages/events/events.component';
import { AddEventComponent } from './pages/add-event/add-event.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'add-event', component: AddEventComponent }
];
