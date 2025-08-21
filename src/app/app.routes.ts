import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Day1 } from './pages/day1/day1';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'day1', component: Day1 }
];
