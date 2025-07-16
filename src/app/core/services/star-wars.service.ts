import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { PersonDetail, PersonProperties } from '../../shared/models/person-detail.interface';
import { PeopleResponse } from '../../shared/models/people.interface';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;
  films = "/films";
  people= "/people";
  planets= "/planets";
  species= "/species";
  starships= "/starships";
  vehicles= "/vehicles";
  constructor() { }

  getFilms(page = 1): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}${this.films}?page=${page}&limit=10`);
  }

  getPeople(page = 1): Observable<PeopleResponse> {
    return this.http.get<PeopleResponse>(`${this.apiUrl}${this.people}?page=${page}&limit=10`);
  }

  getPersonById(pid: string): Observable<{ result: PersonDetail }> {
    return this.http.get< {result: PersonDetail }>(`${this.apiUrl}${this.people}/${pid}`);
  }

  getSpecies(page = 1): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}${this.species}?page=${page}&limit=10`);
  }

  getPlanets(page = 1): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}${this.planets}?page=${page}&limit=10`);
  }

  getStarships(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}${this.starships}`);
  }

  getVehicles(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}${this.vehicles}`);
  }
}
