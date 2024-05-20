import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SideBarComponent, FooterComponent, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'application';
  toggle : boolean = true;

  @ViewChild('sideBar') sideBar !: SideBarComponent;

  onClickSideBarIcon(event : Event){
    this.toggle = !this.toggle;
    this.sideBar.onClickedSidebarToggle(this.toggle);
  }
}
