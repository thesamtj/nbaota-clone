import { Component, OnInit } from '@angular/core';

export interface SuccessiveChairmen {
  position: number;
  chairman: string;
  secretary: string;
  year: string;
}

const successiveChairmen: SuccessiveChairmen[] = [
  {
    position: 1,
    chairman: 'Chief Olayinka Sotayo (Now Deceased)',
    secretary: 'Chief Oluseun Akinbiyi, SAN',
    year: '1991-1992',
  },
  {
    position: 2,
    chairman: 'Hrm. Oba Olufemi Ojugbele',
    secretary: 'Chief Oluseun T. Akinbiyi, SAN',
    year: '1992-1994',
  },
  {
    position: 3,
    chairman: 'Chief Oluseun T. Akinbiyi, SAN',
    secretary: 'Mr. Francis O. Kehinde',
    year: '1994-1995',
  },
  {
    position: 4,
    chairman: 'Mr. Chukwunwike Nwikpo',
    secretary: 'Otunba Olumide Akinbinu',
    year: '1995-1996',
  },
  {
    position: 5,
    chairman: 'Hon. Justice Doye Olugbemi',
    secretary: 'Otunba Olumide Akinbinu',
    year: '1996-1998',
  },
  {
    position: 6,
    chairman: 'Chief Oluseun T. Akinbiyi, SAN',
    secretary: 'Otunba Olumide Akinbinu',
    year: '1999-2001',
  },
  {
    position: 7,
    chairman: 'Mr. Sola Ojutalayo, SAN',
    secretary: 'Mr. M.A. Zakariyau (Now Deceased)',
    year: '2001-2003',
  },
  {
    position: 8,
    chairman: 'Elder (Dr) S.A. Ameh',
    secretary: 'Mr. T.G. Adeosun Esq.',
    year: '2003-2005',
  },
  {
    position: 9,
    chairman: 'Hon. Justice Laja Durojaiye Esq.',
    secretary: 'Mr. Abraham Adeoye Esq.',
    year: '2005- 2007',
  },
  {
    position: 10,
    chairman: 'Otunba Olumide Akinbinu',
    secretary: 'Hon. Justice H.O.  Oyajimi',
    year: '2007- 2009',
  },
  {
    position: 11,
    chairman: 'Mr. Zachariyau, M.A.Esq.',
    secretary: 'Mr. Fagbayi Esq.',
    year: '2009-2011',
  },
  {
    position: 12,
    chairman: 'Alhaji Hibatullai Salako',
    secretary: 'Mr. M.B.A. Owosho  Esq.',
    year: '2012-2014',
  },
  {
    position: 13,
    chairman: 'Mr. T.G. Adeosun',
    secretary: 'Mr. Leke Adeniran Esq.',
    year: '2014-2016',
  },
  {
    position: 14,
    chairman: 'Otunba Olumide Akinbinu',
    secretary: 'Hon. Justice H.O. Oyajimi Esq.',
    year: '2016-2018',
  },
  {
    position: 15,
    chairman: 'Mr. Isaac Ogbah, FICMC',
    secretary: 'Mr. O.A. Pius, Esq.',
    year: '2018-2020',
  },
  {
    position: 16,
    chairman: 'Mr. Joseph Taiwo Ogunniyi, FICMC',
    secretary: 'Mr. Olalekan A. Daramola Esq.',
    year: '2020-2022',
  },
  {
    position: 17,
    chairman: 'Mr. Adegoke Adewale, ACIArb, AICMC',
    secretary: 'Mrs. Ajele Funmilayo, Esq.',
    year: '2022-Date',
  },
];
@Component({
  selector: 'app-successive-chairmen',
  templateUrl: './successive-chairmen.component.html',
  styleUrls: ['./successive-chairmen.component.scss'],
})
export class SuccessiveChairmenComponent implements OnInit {
  displayedColumns: string[] = ['position', 'chairman', 'secretary', 'year'];
  dataSource = successiveChairmen;

  constructor() {}

  ngOnInit(): void {}
}
