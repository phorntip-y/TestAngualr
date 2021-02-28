import { SecurityComponent } from './security/security.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NewsComponent } from './news/news.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'about',component: AboutComponent},
  {path: 'product',component: ProductComponent},
  {path: 'product/:id/:title',component: ProductDetailComponent},
  {path: 'news',component: NewsComponent},
  {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', canActivate: [AuthGuard]},
  {path: 'register',component: RegisterComponent},
  {path: 'secure',component: SecurityComponent},
  {path: '**',component: PagenotfoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{useHash: true,preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
