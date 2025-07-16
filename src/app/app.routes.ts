import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [

    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        {
            path: 'home',
            loadComponent: () =>
            import('./pages/home/home.component').then(m => m.HomeComponent)
        },
        {
            path: 'people',
            loadComponent: () =>
            import('./pages/people/people.component').then(m => m.PeopleComponent)
        },
        {
            path: 'films',
            loadComponent: () =>
            import('./pages/films/films.component').then(m => m.FilmsComponent)
        },
        {
            path: 'vehicles',
            loadComponent: () =>
            import('./pages/vehicles/vehicles.component').then(m => m.VehiclesComponent)
        }
        ]
    },
    { path: '**', redirectTo: 'dashboard' },
];

export const appRouter = provideRouter(routes);

