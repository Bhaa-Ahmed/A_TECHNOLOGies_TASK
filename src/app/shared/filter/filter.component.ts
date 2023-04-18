import { Component, OnInit, Input } from '@angular/core';
import { IOption } from 'src/app/models/filterOptions.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  @Input() filterName = '';
  @Input() options: IOption[] = [];

  showOptions = false;

  constructor() {}

  ngOnInit(): void {}
}
