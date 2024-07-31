import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RiverStreamDetail } from '../_model/ResponseEntity';

@Injectable({
  providedIn: 'root'
})
export class RiverstreamService {

  constructor(private http: HttpClient) { }
  createRiverStreamResponse(detail: RiverStreamDetail) : Observable<RiverStreamDetail> {
    return this.http.post<RiverStreamDetail>(`${environment.apiUrl}/waterBodyAdmin/waterbodyriverstreamresponse/`, detail);
  }
  updateRiverStreamResponse(id: string, detail: RiverStreamDetail) : Observable<RiverStreamDetail> {
    console.log(detail)
    return this.http.patch<RiverStreamDetail>(`${environment.apiUrl}/waterBodyAdmin/waterbodyriverstreamresponse/${id}/`, detail);
  }
}
