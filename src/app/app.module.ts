import { EnsureInputGuard } from './ensure-input.guard';
import { LoginGuard } from './login.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { ClassicComponent } from './form/classic/classic.component';
import { Classic2Component } from './form/classic2/classic2.component';
import { BlockComponent } from './block/block.component';
import { LoadingBtnDirective } from './loading-btn.directive';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardsComponent,
    LoginComponent,
    LayoutComponent,
    ClassicComponent,
    Classic2Component,
    BlockComponent,
    LoadingBtnDirective
  ],
  //依序載入
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    LoginGuard,
    EnsureInputGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
