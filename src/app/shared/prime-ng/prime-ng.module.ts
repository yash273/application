import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';

const modules = //common modules to export and import
[
  ButtonModule,
  ToolbarModule,
  AvatarModule
]

@NgModule({
  declarations: [],
  imports: [
    modules
  ], 
  exports:[
    modules
  ]
})
export class PrimeNgModule { }
