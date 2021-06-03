import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AuthGuard } from './guard/auth.guard';
import { DescriptionComponent } from './ui/description/description.component';
import { FavoritsComponent } from './ui/favorits/favorits.component';
import { HomeComponent } from './ui/home/home.component';
import { RecipeComponent } from './ui/recipe/recipe.component';


const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'home', component: HomeComponent, },
  { path: 'favorits', component: FavoritsComponent,  },
  { path: 'description/:id', component: DescriptionComponent  },
  { path: 'addrecipe', component: RecipeComponent  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
