import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'],
})
export class OutputPropertyComponent implements OnInit {
  @Input()
  valor: number = 0;

  @Output()
  valueChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  @ViewChild('campoInput') // tem de ser o mesmo nome da variavel local do template
  campoValorInput: ElementRef;

  increment(): void {
    this.campoValorInput.nativeElement.value++;
    //this.valor++;
    this.valueChange.emit({ newValue: this.valor });
  }

  decrement(): void {
    this.campoValorInput.nativeElement.value--;
    //this.valor--;
    this.valueChange.emit({ newValue: this.valor });
  }
}
