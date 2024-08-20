import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavLateralComponent } from './nav-lateral/nav-lateral.component';
import { NavTopComponent } from './nav-top/nav-top.component';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [NavLateralComponent, NavTopComponent],
  exports: [NavLateralComponent, NavTopComponent],
  imports: [CommonModule, MaterialModule],
})
export class NavModule {}
