import { Routes } from '@angular/router';

import { MyFormComponent } from './components/my-form/my-form.component';
import { MySuccessComponent } from './components/my-success/my-success.component';

export const routes: Routes = [
  { path: '', redirectTo: '/myform', pathMatch: 'full' }, // Redirección por defecto
  { path: 'myform', component: MyFormComponent },
  { path: 'success', component: MySuccessComponent },
  { path: '**', redirectTo: '/myform' } // Ruta comodín para rutas no encontradas
];
