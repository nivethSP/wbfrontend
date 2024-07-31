import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UpperTankSluiceDetail } from '../_model/ResponseEntity';

@Injectable({
  providedIn: 'root'
})
export class UppertanksluiceService {

  constructor(private http: HttpClient) { }
  createUpperTankSluiceResponse(detail: UpperTankSluiceDetail) : Observable<UpperTankSluiceDetail> {
    return this.http.post<UpperTankSluiceDetail>(`${environment.apiUrl}/waterBodyAdmin/waterbodyuppertanksluiceresponse/`, detail);
  }
  updateUpperTankSluiceResponse(id: string, detail: UpperTankSluiceDetail) : Observable<UpperTankSluiceDetail> {
    console.log(detail)
    return this.http.patch<UpperTankSluiceDetail>(`${environment.apiUrl}/waterBodyAdmin/waterbodyuppertanksluiceresponse/${id}/`, detail);
  }
}
