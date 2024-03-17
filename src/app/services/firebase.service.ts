import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth } from 'firebase/auth';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  auth = inject(AngularFireAuth);

  // Autenticación con correo y contraseña
  async login(user: User) {
    return this.auth.signInWithEmailAndPassword(user.email, user.password);
  }
}
