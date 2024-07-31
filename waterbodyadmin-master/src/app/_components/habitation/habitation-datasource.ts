import { HabitationService } from './../../_services/habitation.service';

import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, catchError, finalize, Observable, of } from "rxjs";
import { Habitation } from "src/app/_model/Habitation";
import { handleError } from "src/app/_utils/errorhandler";

export class HabitationDataSource implements DataSource<Habitation>
{
    private HabitationsSubject = new BehaviorSubject<Habitation[]>([]);
    private HabitationsCountSubject = new BehaviorSubject<number>(0);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();
    public count$ = this.HabitationsCountSubject.asObservable();

    constructor(private habitationService: HabitationService) { }

    connect(collectionViewer: CollectionViewer): Observable<Habitation[]> {
        return this.HabitationsSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.HabitationsSubject.complete();
        this.loadingSubject.complete();
        this.HabitationsCountSubject.complete();
    }

    fetchHabitations(sortField: string, sortOrder: string, filterValue: string, pageIndex = 0, pageSize = 10) {
        this.loadingSubject.next(true);
        this.habitationService.getList(
            sortField, sortOrder, filterValue, pageIndex, pageSize).pipe(
                catchError(handleError<any>('fetchHabitations', null)),
                finalize(() => this.loadingSubject.next(false))
            )
            .subscribe((habitationviewModel => {
                this.HabitationsSubject.next(habitationviewModel.results)
                this.HabitationsCountSubject.next(habitationviewModel.count)
            })
            );
    }
}