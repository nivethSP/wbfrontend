import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FreeCatchmentDetail } from '../_model/ResponseEntity';

@Injectable({
  providedIn: 'root'
})
export class FreecatchmentService {

  constructor(private http: HttpClient) { }
  createFreecatchmentResponse(detail: FreeCatchmentDetail) : Observable<FreeCatchmentDetail> {
    return this.http.post<FreeCatchmentDetail>(`${environment.apiUrl}/waterBodyAdmin/waterbodyfreecatchmentresponse/`, detail);
  }
  updateFreecatchmentResponse(id: string, detail: FreeCatchmentDetail) : Observable<FreeCatchmentDetail> {
    console.log(detail)
    return this.http.patch<FreeCatchmentDetail>(`${environment.apiUrl}/waterBodyAdmin/waterbodyfreecatchmentresponse/${id}/`, detail);
  }
}
