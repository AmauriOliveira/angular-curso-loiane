import {
  Directive,
  HostListener,
  // ElementRef,
  // Renderer2,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  // on mouse over foi nome escolhido por mim*
  // nome mouseenter é padrão
  @HostListener('mouseenter') onMouseOver() {
    // this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
    this._backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'white');
    this._backgroundColor = 'white';
  }

  // se não precisar manipular algo
  // o nome pode ser qulaquer coisa
  //@HostBinding('style.backgroundColor') backgroundColor: string;

    // se precisar manipular algo
  // o nome pode ser qulaquer coisa
  @HostBinding('style.backgroundColor') get setColor() {
    // qualquer codigo extra
    return this._backgroundColor;
  }

  private _backgroundColor: string;

  constructor(
    // private _elementRef: ElementRef,
    // private _renderer: Renderer2,
  ) { }

}

