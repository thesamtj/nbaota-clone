import {
  Component,
  OnInit,
  Inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Member } from 'src/app/model/member';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

interface MoreDetailsData {
  member: Member;
}

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoreDetailsComponent implements OnInit {
  memberItem: Member;
  loading: boolean = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: MoreDetailsData,
    private matDialogRef: MatDialogRef<MoreDetailsComponent>
  ) {
    if (data) {
      this.memberItem = data.member;
      this.loading = false;
    }
    // console.log('showing more details dialog for: ', data.member);
  }

  ngOnInit(): void {}

  close() {
    this.closeDialog();
  }

  private closeDialog() {
    this.matDialogRef.close();
  }
}
