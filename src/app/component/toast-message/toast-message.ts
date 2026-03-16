import { Component, inject } from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-toast-message',
  imports: [],
  templateUrl: './toast-message.html',
  styleUrl: './toast-message.css',
})
export class ToastMessage {
    constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any){ //receiving data from service.ts 
      
    }
    // ngOnInit(){
    //   console.log(this.data)
    // }
 
}