import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './my-form.component.html',
  styleUrl: './my-form.component.css'
})
export class MyFormComponent   {
  myForms: FormGroup;

  constructor(private router: Router) {
    this.myForms = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email // Validador de email de Angular
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6) // Contraseña mínima de 6 caracteres
      ]),
    });
  }

  sessionSave() {
    if (this.myForms.valid) {
      const validForm = this.myForms.value;
      sessionStorage.setItem('email', validForm.email);
      sessionStorage.setItem('password', validForm.password);
      console.log('Guardado correctamente en sessionStorage');
      this.router.navigate(['/success']);
    } else {
      console.log('Formulario no válido');
    }
  }
}
