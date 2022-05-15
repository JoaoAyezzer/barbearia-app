import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsNavigationPageRoutingModule } from './tabs-navigation-routing.module';

import { TabsNavigationPage } from './tabs-navigation.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsNavigationPageRoutingModule
  ],
  declarations: [TabsNavigationPage]
})
export class TabsNavigationPageModule {}
