import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { BreakpointObserver, Breakpoints, MediaMatcher } from '@angular/cdk/layout';
import { map, Observable, shareReplay } from 'rxjs';
import { Session } from 'src/app/_model/Session';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit,OnDestroy {
  mobileQuery: MediaQueryList;
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  private _mobileQueryListener: () => void;
  isMenuOpen = true;
  contentMargin = 240;
  currentYear = new Date().getFullYear().toString();
  user: Session;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Medium)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  
  constructor(private breakpointObserver: BreakpointObserver,
    private authService : AuthenticationService,
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) { 
    this.user = this.authService.userValue;
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
  }
  onToolBarMenuToggle()
  {
     this.isMenuOpen = !this.isMenuOpen;
     console.log('On toolbar toggled', this.isMenuOpen);

     if(!this.isMenuOpen)
     {
       this.contentMargin = 70;
     }
     else
     {
      this.contentMargin = 240;
     }
  }
  signOut()
  {
    this.authService.signOut();
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
