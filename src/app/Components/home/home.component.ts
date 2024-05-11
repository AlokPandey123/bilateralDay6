import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  url="../assets/slide1.png";
  arr:string[] =["../assets/slide1.png","../assets/slide2.png","../assets/slide3.png","../assets/slide4.png"];
  j:number = 4;
  leftImg(){
    if(this.j>0){
        this.url = this.arr[this.j-1];
        this.j--;
    }else{
      this.url = this.arr[this.arr.length-1];

      this.j=this.arr.length-1;
    }
  }
  i:number = 1;
  rightImg(){
    
    if(this.i <this.arr.length){
        this.url = this.arr[this.i];
        this.i++;
    }else{
      this.url = this.arr[0];

      this.i=1;
    }
  }

}
