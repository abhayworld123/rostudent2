import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from '../shared/item';
import { ItemService } from '../shared/item.service';
import { AuthService } from "../../core/auth.service";
import * as firebase from 'firebase';

@Component({
  selector: 'item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {

  item: Item = new Item();
  avg : any;

  items:any;
  arr = [];
  revarr =[];
  percentage:any;
  percentile:any;
  percentilee:any;
  ddb:any;
ValueEventListener:any;



  constructor(private itemSvc: ItemService,public auth: AuthService) { 

     let my  = new Array;
          this.items = this.itemSvc.getItemsList({limitToLast: 5})
        console.log(this.items);

        
  }

  ngOnInit() 
  {


    

   




  
   
    // this.ddb = firebase.database().ref('items').orderByChild('percentage')
   
    // .once('value').then(function(snapshot) {
    //   var username = snapshot.val();
    //   console.log(username);
    //      // ...
    // });


// mDatabase.child("items")
//   .orderByChild("percentage")
//   .addValueEventListener(new ValueEventListener() {
//     public void onDataChange(DataSnapshot snapshot) {
//       for (DataSnapshot child: snapshot.getChildren()) {
//         console.log(child.getKey());
//       }
//     }

   }
   
 
  

  createItem(){
     
      // this.items = this.itemSvc.getItemsList({limitToLast: 5})

      

       
      
     

     this.avg = ( this.item.marks1*1 + this.item.marks2*1 + this.item.marks3*1 + this.item.marks4*1 + this.item.marks5*1 )/5;
      this.percentage = ( this.item.marks1*1 + this.item.marks2*1 + this.item.marks3*1 + this.item.marks4*1 + this.item.marks5*1 )/500  *100   ;
  
    this.item.average =  this.avg;
    this.item.percentage=  this.percentage; 
    this.item.teachername = this.auth.currentUserDisplayName;
    this.item.subject = [{'one':90,'nms':90},{'one':20,'nms':40}];
  
    this.itemSvc.createItem(this.item);
    this.item = new Item() // reset item
    
  }

 


  
}
