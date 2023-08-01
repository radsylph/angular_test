// input.component.ts
import { Component, ElementRef, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @ViewChild('testinput', { static: true }) testinput: ElementRef | undefined;
  inputvalue: string = '';
  newInputValue: string = '';
  @Input() title: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = '';

  public changeName() {
    const name: string | null = this.testinput?.nativeElement.value;
    if (name !== null) {
      this.inputvalue = name;
    }
    this.testinput!.nativeElement.value = '';
  }
  changeInputValue(event: Event) {
    console.log(this.newInputValue);
  }
}
