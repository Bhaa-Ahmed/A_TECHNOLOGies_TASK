import { Component, OnInit, Input } from '@angular/core';
import { IDeal } from 'src/app/models/deal.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() deal!: IDeal;

  constructor() {}

  ngOnInit(): void {}
}
