import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ProductService } from '../../Services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-complain',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './complain.component.html',
  styleUrl: './complain.component.css'
})
export class ComplainComponent {
  constructor(private users:ProductService){}
  handleInput(form:NgForm){
    const data= form.value;
    this.users.postData(data).subscribe((res)=>{
     console.log(res);
     if(res){
       alert("data posted");
     }
    })
    form.resetForm();
 }
}
