import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
})
export class CustomInputComponent {
  @Input() control!: FormControl;
  @Input() label!: string;
  @Input() type!: string;
  @Input() placeholder!: string;
  @Input() icon!: string;
  @Input() autocomplete!: string;

  constructor() {}
}
