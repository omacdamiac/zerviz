import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { END_POINTS } from 'src/app/commons/const/constUris';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { UTILS } from 'src/app/commons/utils/utils';
import { Observable } from 'rxjs';
import { COUNTRY } from 'src/app/core/models/country';
import { PLAYER } from 'src/app/core/models/player';
import { SPORT } from 'src/app/core/models/sport';
import { DATAMAPPER } from 'src/app/core/models/mapper';

@Injectable({
  providedIn: 'root'
})
export class AthleteService {

  constructor(
    private http: HttpClient,
    ) { }

    getCountrie(): Observable<COUNTRY[]> {
      let url_api = `${environment.API_BASE}${END_POINTS.COUNTRY}`;
      return this.http.get<DATAMAPPER.MAPPER>(url_api).pipe(
        map((value:any) => value.map((n: any) => UTILS.mapper(n))));
    }
    getSport(): Observable<SPORT[]> {
      let url_api = `${environment.API_BASE}${END_POINTS.SPORT}`;
      return this.http.get<DATAMAPPER.MAPPER>(url_api).pipe(
        map((value:any) => value.map((n: any) => UTILS.mapper(n))));
    }
    getPlayer(): Observable<PLAYER[]> {
      let url_api = `${environment.API_BASE}${END_POINTS.PLAYER}`;
      return this.http.get<DATAMAPPER.MAPPER_PLAYER>(url_api).pipe(
        map((value:any) => value.map((n: any) => UTILS.mapperPlayer(n))));
    }
}
