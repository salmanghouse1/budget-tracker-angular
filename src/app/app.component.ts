import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  budget:number=0;

  numberOfItems:number=9;
  items: number[] = [1,2,3,4,5,6,7,8,9];
  total:number=0;
  incomeAmount:number[]=[];
  expensesAmount:number[]=[];
  expensesInput:number=0;
  incomeInput:number=0;
  incomeTotal:number=0;
  expensesTotal:number=0;
//   add(){
// this.items.push(this.items.length);
  
// }
//   remove(){
// this.items.pop();
//   }
  formSubmitIncome(){
      this.incomeAmount.push(this.incomeInput);
      this.incomeTotal=this.incomeAmount.reduce((a, b) => a + b, 0);
    }
  
    formSubmitExpenses(){
      this.expensesAmount.push(this.expensesInput);
      this.expensesTotal=this.expensesAmount.reduce((a, b) => a + b, 0);
    }

  reset(){
    console.log("reseted")

  }
}
