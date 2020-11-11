import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  public pieChartData: number[] = [350,450,120];
  public pieChartLabels: String[] = ['XZY Logistics', 'Acme Hosting', 'ABC Bakery'];
  colors: any[] = [ 
    {
      backgroundColor: ['#26547c', '#ff6b6b', '#ffd166'],
      borderColor: '#222'
    }
  ];
  public pieChartType = 'doughnut';

  ngOnInit(): void {
  }

}
