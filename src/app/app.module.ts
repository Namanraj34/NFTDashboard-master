import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MetaverseWalletComponent } from './metaverse-wallet/metaverse-wallet.component';
import { CreateNftComponent } from './create-nft/create-nft.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { SellerItemComponent } from './seller-item/seller-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    DashboardComponent,
    MetaverseWalletComponent,
    CreateNftComponent,
    SellerItemComponent,
  ],

  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],

  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
