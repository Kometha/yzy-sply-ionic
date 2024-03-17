import { Injectable, inject } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  loadingController = inject(LoadingController);

  loading(){
    return this.loadingController.create({
      message: 'Cargando...',
      spinner: 'crescent'
    });
  }
}
