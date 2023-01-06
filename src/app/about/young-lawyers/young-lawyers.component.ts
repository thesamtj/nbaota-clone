import { Component, OnInit } from '@angular/core';

export interface YoungLawyers {
  position: number;
  name: string;
  portfolio: string;
}

const youngLawyers: YoungLawyers[] = [
  {
    position: 1,
    name: 'Kehinde S. Jola',
    portfolio: 'Chairman',
  },
  {
    position: 2,
    name: 'Oluwaseyi Vessel Olaoye',
    portfolio: 'Vice Chairman',
  },
  {
    position: 3,
    name: 'Mercy Airiohuodion',
    portfolio: 'Secretary',
  },
  {
    position: 4,
    name: 'Oluwatofunmi Felicia Adeniyi',
    portfolio: 'Financial Secretary',
  },
];
@Component({
  selector: 'app-young-lawyers',
  templateUrl: './young-lawyers.component.html',
  styleUrls: ['./young-lawyers.component.scss'],
})
export class YoungLawyersComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'portfolio'];
  dataSource = youngLawyers;

  constructor() {}

  ngOnInit(): void {}
}
