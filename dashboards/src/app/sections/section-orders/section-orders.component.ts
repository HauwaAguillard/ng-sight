import { Component, OnInit } from '@angular/core';
import { Order } from '../../shared/order';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }

  public orders: Order[] = [
    {id: 1, customer: 
      {id: 1, name: 'Jeni Fan', state: 'AR', email: 'jen@fan.com'}, 
      total: 400, placed: new Date(2017, 12, 1), fulfilled: new Date(2017, 12, 4),},
    {id: 2, 
      customer: {id: 1, name: 'Jeni Fan', state: 'AR', email: 'jen@fan.com'}, 
      total: 400, placed: new Date(2017, 12, 1), fulfilled: new Date(2017, 12, 4),},
    {id: 3, 
      customer: {id: 1, name: 'Jeni Fan', state: 'AR', email: 'jen@fan.com'}, 
      total: 400, placed: new Date(2017, 12, 1), fulfilled: new Date(2017, 12, 4),},
    {id: 4, 
      customer: {id: 1, name: 'Jeni Fan', state: 'AR', email: 'jen@fan.com'}, 
      total: 400, placed: new Date(2017, 12, 1), fulfilled: new Date(2017, 12, 4),},
    {id: 5, 
      customer: {id: 1, name: 'Jeni Fan', state: 'AR', email: 'jen@fan.com'}, 
      total: 400, placed: new Date(2017, 12, 1), fulfilled: new Date(2017, 12, 4),},
  ];

  ngOnInit(): void {
  }

}
