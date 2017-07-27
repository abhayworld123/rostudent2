import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from '../shared/item.service';
import { Item } from '../shared/item';

@Component({
  selector: 'item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  avg :any;
  percentage:any;

  @Input() item: Item;

  constructor(private itemSvc: ItemService) { }

  ngOnInit() {

    this.avg = ( this.item.marks1*1 + this.item.marks2*1 + this.item.marks3*1 + this.item.marks4*1 + this.item.marks5*1 )/5;
      this.percentage = ( this.item.marks1*1 + this.item.marks2*1 + this.item.marks3*1 + this.item.marks4*1 + this.item.marks5*1 )/500  *100   ;
  
    
  }

  updateTimeStamp() {
    let date = new Date()
    this.itemSvc.updateItem(this.item.$key, { timeStamp: date })
  }

  updateActive(value: boolean) {
    this.itemSvc.updateItem(this.item.$key, { active: value })
  }

  deleteItem() {
    this.itemSvc.deleteItem(this.item.$key)
  }

}
