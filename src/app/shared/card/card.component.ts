import { Component, OnInit, Input } from '@angular/core';
import { IDeal } from 'src/app/models/deal.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() deal!: IDeal;

  // deal = {
  //   id: 6,
  //   first_name: 'Dennis',
  //   last_name: 'Schulist',
  //   email: 'dennis@example.com',
  //   phone: '1-477-935-8478 x6430',
  //   company: 'Skiles-Weissnat',
  //   status: 'Potential Value',
  //   date: '2023-03-18',
  //   probability_status: '30%',
  //   state: 'Returning',
  // };

  constructor() {}

  ngOnInit(): void {}
}
