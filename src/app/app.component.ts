import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  display = '';
  num1 = '';
  num2 = '';
  operator: string|null = null;
  isNeedToRest = false;

  addNumber(value: string): void {
    if (this.isNeedToRest) {
      this.reset();
      this.isNeedToRest = false;
    }
    this.display += value;
  }

  minus(): void {
    this.operator = '-';
    this.switchNumbers();
  }

  add(): void {
    this.operator = '+';
    this.switchNumbers();
  }

  switchNumbers(): void {
    this.num1 = this.display;
    this.display = '';
  }

  calc(): void {
    this.num2 = this.display;
    if (this.operator === '+') {
      const result = +this.num1 + +this.num2;
      this.display = `${this.num1} + ${this.num2} = ${result}`;
    } else if (this.operator === '-') {
      const result = +this.num1 - +this.num2;
      this.display = `${this.num1} - ${this.num2} = ${result}`;
    }
    this.isNeedToRest = true;
  }

  reset(): void {
    this.num1 = '';
    this.num2 = '';
    this.display = '';
  }
}
