import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  pegarchamp(){
    return this.http.get('https://ddragon.leagueoflegends.com/cdn/14.6.1/data/en_US/champion.json');
  
  }

}
