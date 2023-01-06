import { Component, OnDestroy, Inject, ChangeDetectorRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { ContactDialogComponent } from './contact-dialog/contact-dialog.component';
import { SE } from './directives/scroll.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  title = 'nbaota';

  contactFabButton: any;
  bodyelement: any;
  sidenavelement: any;

  isActive = false;
  isActivefadeInDown = true;
  fixedTolbar = true;

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(
    @Inject(DOCUMENT) document,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public dialog: MatDialog
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  public detectScroll(event: SE) {
    if (event.header) {
      this.isActive = false;
      this.isActivefadeInDown = true;
      this.fixedTolbar = true;
    }

    if (event.bottom) {
      this.isActive = true;
      this.isActivefadeInDown = false;
      this.fixedTolbar = false;
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ContactDialogComponent, {
      width: '250px',
      disableClose: true
    });
  }

  setToggleOn() {
    this.bodyelement = document.getElementById('nbapage');
    this.bodyelement.classList.add('scrollOff');
    this.contactFabButton = document.getElementById('contact-fab-button');
    this.contactFabButton.style.display = 'none';
  }

  setToggleOff() {
    this.bodyelement = document.getElementById('nbapage');
    this.bodyelement.classList.remove('scrollOff');
    this.contactFabButton = document.getElementById('contact-fab-button');
    this.contactFabButton.removeAttribute('style');
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
