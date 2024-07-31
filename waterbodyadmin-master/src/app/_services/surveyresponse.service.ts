import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Resource } from '../_model/Resource';
import { ParticularDetail } from '../_model/ResponseEntity';
import { ResourceService } from './resource.service';

@Injectable({
  providedIn: 'root'
})
export class SurveyresponseService {

  constructor(private http: HttpClient) { }

  getResourceUrl(): string {
    return '/waterBodyAdmin/waterbodysurveyresponse';
  }

  createSurveyResponse(detail: ParticularDetail) : Observable<ParticularDetail> {
    return this.http.post<ParticularDetail>(`${environment.apiUrl}/waterBodyAdmin/waterbodysurveyresponse/`, detail);
  }
}
