import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDeal } from '../models/deal.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DealsService {
  searchQuery = new Subject<string>();
  dealsNumber: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(private http: HttpClient) {}

  getDeals(): Observable<{ deals: IDeal[] }> {
    return this.http.get<{ deals: IDeal[] }>(
      'https://my-json-server.typicode.com/mabukoush1/contacts/db'
    );
  }
}
