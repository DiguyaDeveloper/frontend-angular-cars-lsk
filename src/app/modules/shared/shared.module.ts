import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from './components/toast/toast.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ToastComponent } from './components/toast/toast.component';



@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    ToastComponent,
  ],
  imports: [
    NgbModule,
    RouterModule,
    CommonModule
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    ToastComponent
  ],
  providers: []
})
export class SharedModule { }
