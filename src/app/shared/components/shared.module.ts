import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { BoxComponent } from './box/box.component';
import { VerticalSidebarComponent } from './vertical-sidebar/vertical-sidebar.component';

@NgModule({
  declarations: [
    CardComponent,
    SidebarComponent,
    FooterComponent,
    BoxComponent,
    VerticalSidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    SidebarComponent,
    FooterComponent,
    BoxComponent,
    VerticalSidebarComponent
  ]
})
export class SharedModule { }
