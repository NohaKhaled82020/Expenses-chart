import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { IExpense } from '../IExpense.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  value: string = '#ec775f';
  expensesData: IExpense[] = [];
  barChartcustomColors = [
    { name: 'mon', value: this.value },
    { name: 'tue', value: this.value },
    { name: 'wed', value: '#76b5bc' },
    { name: 'thu', value: this.value },
    { name: 'fri', value: this.value },
    { name: 'sat', value: this.value },
    { name: 'sun', value: this.value },
  ];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data
      .pipe(tap((res: any) => (this.expensesData = res.expenses)))
      .toPromise();
  }
}
