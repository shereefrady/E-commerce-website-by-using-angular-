import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './component/register/register.component';
import { ProductTestComponent } from './component/product-test/product-test.component';
import { DetailsComponent } from './component/details/details.component';
import { LaptopComponent } from './component/laptop/laptop.component';
import { MobileComponent } from './component/mobile/mobile.component';
import { CartComponent } from './component/cart/cart.component';
import { MainComponent } from './component/Admin/main/main.component';
import { AddUserComponent } from './component/Admin/add-user/add-user.component';
import { ShowProductsComponent } from './component/Admin/show-products/show-products.component';
import { AddProductComponent } from './component/Admin/add-product/add-product.component';
import { ShowCategoryComponent } from './component/Admin/show-category/show-category.component';
import { AddCategoryComponent } from './component/Admin/add-category/add-category.component';
import { UpdateProductComponent } from './component/Admin/update-product/update-product.component';
import { TabletComponent } from './component/tablet/tablet.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard] },

  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'products', component: ProductTestComponent },
  { path: 'products/:pid', component: DetailsComponent },
  { path: 'labtop', component: LaptopComponent },
  { path: 'mobile', component: MobileComponent },
  { path: 'tablet', component: TabletComponent },
  { path: 'cart', component: CartComponent },
  { path: 'main', component: MainComponent, canActivate: [AuthGuard] },
  { path: 'adduser', component: AddUserComponent, canActivate: [AuthGuard] },
  { path: 'Showproducts', component: ShowProductsComponent, canActivate: [AuthGuard] },
  { path: 'addprod', component: AddProductComponent, canActivate: [AuthGuard] },
  { path: 'cate', component: ShowCategoryComponent, canActivate: [AuthGuard] },
  { path: 'addcate', component: AddCategoryComponent, canActivate: [AuthGuard] },
  {path:'update',component:UpdateProductComponent},
  {path:'details/:pid',component:DetailsComponent}

  // {path:'mobile',component:mob}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
