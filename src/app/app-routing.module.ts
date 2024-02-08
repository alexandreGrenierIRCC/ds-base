import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { Shell } from './shell/shell.service';
import { OverviewComponent } from './pages/overview/overview.component';



const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'overview',
      component: OverviewComponent
    },

    { path: '', redirectTo: '/overview', pathMatch: 'full' }
  ]),

  { path: '**', redirectTo: '/overview', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
