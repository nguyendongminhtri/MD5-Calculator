import { Component, OnInit } from '@angular/core';
import {Calculator} from "../model/Calculator";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  calculator?: Calculator;
  form: any = {};
  result?: number;
  constructor() { }

  ngOnInit(): void {
    // @ts-ignore
    // this.result = this.calculator?.number1 + this.calculator?.number2;
  }

  ngSubmit() {
    console.log('goi ham nay khong')
   this.calculator = new Calculator(
     this.form.number1,
     this.form.number2
   )
    this.result = parseInt(this.form.number1) + parseInt(this.form.number2);
  }
}
