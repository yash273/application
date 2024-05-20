import { Component, ElementRef, Renderer2 } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {

  constructor(
    private renderer2 : Renderer2,
    private elRef: ElementRef
  ){ }
  
  onClickedSidebarToggle(event :boolean){
    if(event == true){
      this.renderer2.addClass(this.elRef.nativeElement,'active')

    }else {
      this.renderer2.removeClass(this.elRef.nativeElement,'active')
    }
  }
}
