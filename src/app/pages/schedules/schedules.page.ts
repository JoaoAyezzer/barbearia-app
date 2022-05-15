import { ServicesPage } from './../services/services.page';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-schedules',
  templateUrl: 'schedules.page.html',
  styleUrls: ['schedules.page.scss']
})
export class SchedulesPage {

  constructor(private modalController: ModalController) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: ServicesPage
    });
    return await modal.present();
  }

}
