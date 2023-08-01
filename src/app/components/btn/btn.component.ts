import {
  Component,
  Input,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css'],
})
export class BtnComponent {
  @ViewChild(InputComponent, { static: true }) InputComponent:
    | InputComponent
    | undefined;
  @Input() BtnName: string = '';
  @Output() BtnEvent = new EventEmitter<void>();

  public changeinputext() {
    console.log('test');
    this.InputComponent?.changeName();
  }
}
