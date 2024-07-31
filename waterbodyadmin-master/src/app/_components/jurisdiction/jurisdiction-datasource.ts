import { JurisdictionService } from './../../_services/jurisdiction.service';
import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, catchError, finalize, Observable, of } from "rxjs";
import { Jurisdiction } from "src/app/_model/Jurisdiction";

import { handleError } from "src/app/_utils/errorhandler";

export class JurisdictionDataSource implements DataSource<Jurisdiction>
{
    private JurisdictionsSubject = new BehaviorSubject<Jurisdiction[]>([]);
    private JurisdictionsCountSubject = new BehaviorSubject<number>(0);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();
    public count$ = this.JurisdictionsCountSubject.asObservable();

    constructor(private jurisdictionService: JurisdictionService) { }

    connect(collectionViewer: CollectionViewer): Observable<Jurisdiction[]> {
        return this.JurisdictionsSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.JurisdictionsSubject.complete();
        this.loadingSubject.complete();
        this.JurisdictionsCountSubject.complete();
    }

    fetchJurisdictions(sortField: string, sortOrder: string, filterValue: string, pageIndex = 0, pageSize = 10) {
        this.loadingSubject.next(true);
        this.jurisdictionService.getList(
            sortField, sortOrder, filterValue, pageIndex, pageSize).pipe(
                catchError(handleError<any>('fetchJurisdictions', null)),
                finalize(() => this.loadingSubject.next(false))
            )
            .subscribe((jurisdictionviewModel => {
                this.JurisdictionsSubject.next(jurisdictionviewModel.results)
                this.JurisdictionsCountSubject.next(jurisdictionviewModel.count)
            })
            );
    }
}