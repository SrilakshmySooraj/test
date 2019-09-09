import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
  { path: 'ui-screens', loadChildren: './ui-screens/ui-screens.module#UiScreensPageModule', canLoad :[AuthGuard] },
  { path: 'screen1', loadChildren: './screen1/screen1.module#Screen1PageModule' },
  { path: 'screen2', loadChildren: './screen2/screen2.module#Screen2PageModule' },
  { path: 'screen3', loadChildren: './screen3/screen3.module#Screen3PageModule' },
  { path: 'screen4', loadChildren: './screen4/screen4.module#Screen4PageModule' },
  { path: 'screen5', loadChildren: './screen5/screen5.module#Screen5PageModule' },
  { path: 'screen6', loadChildren: './screen6/screen6.module#Screen6PageModule' },
  { path: 'screen7', loadChildren: './screen7/screen7.module#Screen7PageModule' },
  { path: 'screen7', loadChildren: './screen7/screen7.module#Screen7PageModule' },
  { path: 'screen8', loadChildren: './screen8/screen8.module#Screen8PageModule' },
  { path: 'screen9', loadChildren: './screen9/screen9.module#Screen9PageModule' },
  { path: 'screen10', loadChildren: './screen10/screen10.module#Screen10PageModule' },
  { path: 'screen11', loadChildren: './screen11/screen11.module#Screen11PageModule' },
  { path: 'screen12', loadChildren: './screen12/screen12.module#Screen12PageModule' },
  { path: 'screen13', loadChildren: './screen13/screen13.module#Screen13PageModule' },
  { path: 'screen14', loadChildren: './screen14/screen14.module#Screen14PageModule' },
  { path: 'screen15', loadChildren: './screen15/screen15.module#Screen15PageModule' },
  { path: 'screen16', loadChildren: './screen16/screen16.module#Screen16PageModule' },
  { path: 'screen17', loadChildren: './screen17/screen17.module#Screen17PageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
