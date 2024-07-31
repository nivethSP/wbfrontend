import { HabitationDetailComponent } from './habitation-detail/habitation-detail.component';
import { HabitationCreateComponent } from './habitation-create/habitation-create.component';
import { HabitationListComponent } from './habitation-list/habitation-list.component';
import { routes } from './../habitation/habitation-routing/habitation-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/_shared/shared.module';


@NgModule({
    declarations: [
        HabitationListComponent,
        HabitationCreateComponent,
        HabitationDetailComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ]
})
export class HabitationModule { }
