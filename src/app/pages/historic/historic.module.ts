import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HistoricPage } from './historic.page';
import { HistoricPageRoutingModule } from './historic-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HistoricPageRoutingModule
  ],
  declarations: [HistoricPage]
})
export class HistoricPageModule {}
