import { Component, EventEmitter, Output } from '@angular/core';
import { PrimeNgModule } from '../../shared/prime-ng/prime-ng.module';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PrimeNgModule, SharedModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Output() onClickSideBarIconEvent = new EventEmitter<Event>();

  onClickSideBarIcon(event : Event){
    this.onClickSideBarIconEvent.emit(event);
  }
}
