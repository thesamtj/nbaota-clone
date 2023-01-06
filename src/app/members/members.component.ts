import {
  Component,
  OnInit,
  ViewChild,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Member } from '../model/member';
import { MoreDetailsComponent } from './more-details/more-details.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { DataService } from '../service/data.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MembersComponent implements OnInit {
  dataSource = new MatTableDataSource<Member>();
  loading = true;
  subscriptions = [];
  displayedColumns = ['position', 'name', 'phoneNo', 'info'];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private memberDataService: DataService,
    private matDialog: MatDialog
  ) {}

  ngOnInit() {
    this.subscriptions.push(
      this.memberDataService.getAllMembers().subscribe((members) => {
        this.onDataLoad(members);
      })
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  onDataLoad(members: Member[]) {
    this.loading = false;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.data = members;
  }

  viewMore(member) {
    this.matDialog.open(MoreDetailsComponent, {
      width: '350px',
      // height: "250px",
      data: { member },
      disableClose: true,
    });
  }
}
