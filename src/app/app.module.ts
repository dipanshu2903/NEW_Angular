import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { SidenavComponent } from './admin/SideNavFld/sidenav/sidenav.component';
import { NavbarComponent } from './admin/SideNavFld/navbar/navbar.component';
import { MainComponent } from './admin/SideNavFld/main/main.component';
import { VendorTblComponent } from './admin/SideNavFld/main/vendor-tbl/vendor-tbl.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidenavComponent,
    NavbarComponent,
    MainComponent,
    VendorTblComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
