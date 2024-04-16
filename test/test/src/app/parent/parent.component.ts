import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  text:any=[]
  datas:any=[]
  displaydatas:any=[]
  parenttext:any=[]

  constructor() { }

  form:FormGroup

  ngOnInit(): void {
    this.form=new FormGroup({
      'text':new FormControl(null,Validators.required)
    })
  }

  onSubmit(){
    console.log(this.form.value)
    this.parenttext.push(this.text)
    console.log(this.datas)
    this.form.reset()
  }

  datafromchild(data:any){
 this.datas=data
 this.displaydatas.push(this.datas)
 console.log(this.datas)
  }

  get textCntrl(){
    return this.form.get('text')
  }



}
