import { Directive, Input, ElementRef, HostListener, OnInit, ViewChild, AfterViewInit  } from '@angular/core';
import { TabService } from './tab.service';
type IKNOWISNUMBER = any;
type IKNOWISSTRING = any;
@Directive({
  selector: '[tabIndex]'
})
export class TabDirective implements AfterViewInit{
  // @ViewChild('myAnchor') el: ElementRef
  private _index: number;
  get index(): IKNOWISNUMBER{
    return this._index;
  }
  @Input('tabIndex')
  set index(i: IKNOWISSTRING){
    this._index = parseInt(i);
  }
  @HostListener('keydown', ['$event'])
  onInput(e: any) {
    if (e.which === 40) {
      this.tabService.selectedInput.next(this.index + 1)
      e.preventDefault();
    }else {
      this.tabService.selectedInput.next(this.index - 1);
    }
  }
  constructor(private tabService: TabService, private el: ElementRef) { }
  ngAfterViewInit(){
   
  // this.setFocus();
    this.tabService.selectedInput
      .subscribe(i => {
        console.log(i, this.index);
        if (i === this.index){
          console.log("El",this.el)
          setTimeout(()=>{
            this.el.nativeElement.focus();
          },100)
        }
      });
  }
  // ngAfterViewInit(){
  //   this.el.nativeElement.focus();
  // }
  // setFocus(name){
  //   const ele = this.el.nativeElement[name];
  //   if(ele){
  //     ele.focus()
  //   } 
    
  // }

}
