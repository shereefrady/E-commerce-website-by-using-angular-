import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { NavComponent } from './component/Layout/nav/nav.component';
import { HomeComponent } from './component/home/home.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth.guard';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './component/register/register.component';
import { ProductTestComponent } from './component/product-test/product-test.component';
import { DetailsComponent } from './component/details/details.component';
// import { SliderComponent } from './component/slider/slider.component';

import { LapSampleComponent } from './component/lap-samples/lap-sample.component';
import { LaptopComponent } from './component/laptop/laptop.component';
import { MobsamplesComponent } from './component/mobsamples/mobsamples.component';
import { MobileComponent } from './component/mobile/mobile.component';
import { CartComponent } from './component/cart/cart.component';
import { AdminComponent } from './component/Admin/admin/admin.component';
import { SideComponent } from './component/Admin/side/side.component';
import { MainComponent } from './component/Admin/main/main.component';
import { FooterComponent } from './component/Admin/footer/footer.component';
import { AdminNavComponent } from './component/Admin/admin-nav/admin-nav.component';
import { SliderComponent } from './component/Layout/slider/slider.component';
import { AddCategoryComponent } from './component/Admin/add-category/add-category.component';
import { AddProductComponent } from './component/Admin/add-product/add-product.component';
import { AddUserComponent } from './component/Admin/add-user/add-user.component';
import { ShowCategoryComponent } from './component/Admin/show-category/show-category.component';
import { ShowProductsComponent } from './component/Admin/show-products/show-products.component';
import { UpdateProductComponent } from './component/Admin/update-product/update-product.component';
import { TabSampleComponent } from './component/tab-sample/tab-sample.component';
import { TabletComponent } from './component/tablet/tablet.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    ProductTestComponent,
    DetailsComponent,
    SliderComponent,
    LapSampleComponent,
    LaptopComponent,
    MobsamplesComponent,
    MobileComponent,
    CartComponent,
    AdminComponent,
    SideComponent,
    MainComponent,
    FooterComponent,
    AdminNavComponent,
    AddCategoryComponent,
    AddProductComponent,
    AddUserComponent,
    ShowCategoryComponent,
    ShowProductsComponent,
  UpdateProductComponent,
  TabSampleComponent,
  TabletComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
