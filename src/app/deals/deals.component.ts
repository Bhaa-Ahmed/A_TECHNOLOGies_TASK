import { Component, OnInit } from '@angular/core';
import { IOption } from '../models/filterOptions.model';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css'],
})
export class DealsComponent implements OnInit {
  segmentOptions: IOption[] = [
    { id: 'segmentA', label: 'Segment A (21)' },
    { id: 'segmentB', label: 'Segment B (7)' },
    { id: 'segmentC', label: 'Segment C (14)' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
