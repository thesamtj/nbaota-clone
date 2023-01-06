import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branch-officers',
  templateUrl: './branch-officers.component.html',
  styleUrls: ['./branch-officers.component.scss']
})
export class BranchOfficersComponent implements OnInit {
  cards = [1,2,3,4,5,6,7,8]
  
  constructor() { }

  ngOnInit(): void {
  }

}
