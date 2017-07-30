import { Component, OnInit } from '@angular/core';
import { ItemService } from '../shared/item.service';
import { Item } from '../shared/item';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  items: FirebaseListObservable<Item[]>;

  showSpinner: boolean = true;
  arr =[];
  revarr =[];
  percentile:any;
  percentilee =[];
  rank =[];

  constructor(private itemSvc: ItemService) { }

  ngOnInit() {
    this.items = this.itemSvc.getItemsList({limitToLast: 5})
this.items = this.items;
     this.items.forEach((elem)=>{
    
        this.arr.push( elem );
           this.arr = this.arr[0];
           let totall = this.arr.length;
           this.revarr = this.arr.reverse();
           this.arr.forEach((element,index)=>{
             let rank = index+1;
             let low = totall - rank; 
             this.percentile =  (100*rank)/totall ;
             this.percentilee.push(this.percentile);
             this.rank.push(rank);
               
             console.log(this.percentilee);
        // this.items.push({ percentile: this.percentile });
      })

   let abc =   Object.assign({}, this.percentilee); 
    console.log(abc);
 this.percentilee= this.percentilee.reverse();
     console.log(this.revarr + "d" + totall);
   });




    this.items.subscribe(() => this.showSpinner = false)
  }

  deleteItems() {
    this.itemSvc.deleteAll()
  }



}
