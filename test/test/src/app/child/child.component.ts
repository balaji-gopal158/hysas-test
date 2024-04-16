import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @ Input() dataFromParent:any=[]
  @ Output() customevent= new EventEmitter()

  dataFrompaC:any=[]

  childtext:any=[]


  constructor() { }

  childform:FormGroup

  ngOnInit(): void {
    this.childform=new FormGroup({
      'childtext':new FormControl(null,Validators.required)
    })
    this.dataFrompaC.push(this.dataFromParent)
    console.log(this.dataFrompaC)
  }

  onSubmit(){
    console.log(this.childform.value)
    this.customevent.emit(this.childtext)
    this.childform.reset()
   // console.log(this.customevent)
  }

  get textCntrl(){
    return this.childform.get('childtext')
  }



}
