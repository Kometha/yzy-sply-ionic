import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  fireBaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  async onSubmit() {
    if (this.form.invalid) {
      return;
    } else {

      const loading = await this.utilsSvc.loading();
      await loading.present();

      this.fireBaseSvc.login(this.form.value as User).then((res) => {
        console.log('Usuario logueado:', res);
      }).catch((err) => {
        console.error('Error:', err);
      }).finally(() => {
        loading.dismiss();
      });
    }
  }
}
