import { Habitation } from './../_model/Habitation';
import { Injectable } from '@angular/core';
import { ResourceService } from './resource.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HabitationService extends ResourceService<Habitation> {

  constructor(protected override httpClient: HttpClient) {
    super(httpClient);
  }

  getResourceUrl(): string {
    return '/waterBodyAdmin/waterBodyHabitation';
  }
}
