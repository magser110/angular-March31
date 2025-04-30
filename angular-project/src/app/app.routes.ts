import { Routes } from '@angular/router';
import { DashboardPageComponent } from './features/dashboard-page/dashboard-page.component';
import { ExerciseListComponent } from './features/exercises/components/exercise-list/exercise-list.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './shared/guard/auth.guard';

export const routes: Routes = [

  {
    path: '',
    component: DashboardPageComponent
  }
  // {
  //   path: '', redirectTo: '/login', pathMatch: 'full'
  // },
  // {
  //   path: 'login', component: LoginComponent
  // },

  // {
  //   path: 'dashboard',
  //   component: DashboardPageComponent,
  //   canActivate: [AuthGuard]
  // },

];
