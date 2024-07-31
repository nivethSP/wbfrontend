import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Jurisdiction } from '../_model/Jurisdiction';
import { ResourceService } from './resource.service';

@Injectable({
  providedIn: 'root'
})
export class JurisdictionService extends ResourceService<Jurisdiction>{

  constructor(protected override httpClient: HttpClient) {
    super(httpClient);
  }

  getResourceUrl(): string {
    return '/waterBodyAdmin/waterBodyJurisdiction';
  }
}
