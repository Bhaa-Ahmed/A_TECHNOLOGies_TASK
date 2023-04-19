import { Component, OnInit } from '@angular/core';
import { IOption } from '../models/filterOptions.model';
import { IDeal } from '../models/deal.model';
import { DealsService } from '../services/deals.service';
import { debounceTime } from 'rxjs/operators';

import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

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

  deals: IDeal[] = [];
  potentialValueArray: IDeal[] = [];
  focusArray: IDeal[] = [];
  contactMadeArray: IDeal[] = [];
  offerSentArray: IDeal[] = [];
  gettingReadyArray: IDeal[] = [];

  constructor(private dealsService: DealsService) {
    this.dealsService.searchQuery
      .pipe(debounceTime(500))
      .subscribe((searchQuery) => {
        const filteredArray: IDeal[] = [];

        this.deals.forEach((deal) => {
          if (
            deal.first_name.toLowerCase().includes(searchQuery) ||
            deal.last_name.toLowerCase().includes(searchQuery) ||
            deal.email.toLowerCase().includes(searchQuery)
          )
            filteredArray.push(deal);
        });

        this.filterDealsBasedOnStatus(filteredArray);
      });
  }

  ngOnInit(): void {
    this.getDeals();
  }

  getDeals() {
    this.dealsService.getDeals().subscribe((res) => {
      this.deals = res.deals;
      this.filterDealsBasedOnStatus(this.deals);
    });
  }

  filterDealsBasedOnStatus(deals: IDeal[]) {
    this.dealsService.dealsNumber.next(deals.length);
    this.potentialValueArray = [];
    this.focusArray = [];
    this.contactMadeArray = [];
    this.offerSentArray = [];
    this.gettingReadyArray = [];

    deals.forEach((deal: IDeal) => {
      switch (deal.status) {
        case 'Potential Value':
          this.potentialValueArray.push(deal);
          break;
        case 'Focus':
          this.focusArray.push(deal);
          break;
        case 'Contact Made':
          this.contactMadeArray.push(deal);
          break;
        case 'Offer Sent':
          this.offerSentArray.push(deal);
          break;
        case 'Getting Ready':
          this.gettingReadyArray.push(deal);
          break;
      }
    });
  }

  search(event: Event) {
    let searchQuery = (event.target as HTMLInputElement).value;
    this.dealsService.searchQuery.next(searchQuery);
  }
}
