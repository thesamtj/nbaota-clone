import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member } from '../model/member';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class DataService {

  
  constructor(private http: HttpClient) {}

  getAllMembers(): Observable<Member[]> {
    return this.http.get('members.json').pipe(delay(2000)) as Observable<
      Member[]
    >;
  }

  
}
