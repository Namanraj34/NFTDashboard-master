import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNftComponent } from './create-nft/create-nft.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MetaverseWalletComponent } from './metaverse-wallet/metaverse-wallet.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', component: DashboardComponent },
  { path: 'meta-wallet', component: MetaverseWalletComponent },
  { path: 'create-nft', component: CreateNftComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
