import { Component } from '@angular/core';
import { BusquedaPage } from '../busqueda/busqueda.page';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalController: ModalController) {}

  async abrirModal() {
    const modal = await this.modalController.create({
      component: BusquedaPage, // Nombre de tu página modal
      componentProps: { }
    });
    return await modal.present();
  }
}
