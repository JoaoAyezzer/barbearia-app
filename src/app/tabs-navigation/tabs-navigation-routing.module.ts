import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsNavigationPage } from './tabs-navigation.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsNavigationPage,
    children: [
      {
        path: 'schedules',
        loadChildren: () => import('../pages/schedules/schedules.module').then(m => m.SchedulesPageModule)
      },
      {
        path: 'historic',
        loadChildren: () => import('../pages/historic/historic.module').then(m => m.HistoricPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../pages/profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/schedules',
        pathMatch: 'full'    
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/schedules',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsNavigationPageRoutingModule {}
