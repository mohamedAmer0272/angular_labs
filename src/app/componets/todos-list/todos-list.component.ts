import { Component } from '@angular/core';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent {
inpVal:string=''
indx:any
DoList:string[]=[]
addList(){
  this.DoList.push(this.inpVal)
  console.log(this.DoList)
  this.inpVal=''
}
Remove(i:number){
  this.DoList=this.DoList.filter((item,index)=>index!=i)
}
}
