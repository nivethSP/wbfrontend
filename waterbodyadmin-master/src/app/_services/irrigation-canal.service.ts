import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IrrigationCanalDetail } from '../_model/ResponseEntity';

@Injectable({
  providedIn: 'root'
})
export class IrrigationCanalService {

  constructor(private http: HttpClient) { }
  createIrrigationCanalResponse(detail: IrrigationCanalDetail) : Observable<IrrigationCanalDetail> {
    return this.http.post<IrrigationCanalDetail>(`${environment.apiUrl}/waterBodyAdmin/waterbodyirrigationcanalresponse/`, detail);
  }
  updateIrrigationCanalResponse(id: string, detail: IrrigationCanalDetail) : Observable<IrrigationCanalDetail> {
    console.log(detail)
    return this.http.patch<IrrigationCanalDetail>(`${environment.apiUrl}/waterBodyAdmin/waterbodyirrigationcanalresponse/${id}/`, detail);
  }
}
