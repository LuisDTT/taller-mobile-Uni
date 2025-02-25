import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'home/pokemon',
    loadChildren: () =>
      import('./pokemon-page/pokemon-page.module').then(
        (m) => m.PokemonPageModule,
      ),
  },
  {
    path: 'pokemon/:name',
    loadChildren: () =>
      import('./pokemon-detail/pokemon-detail.module').then(
        (m) => m.PokemonDetailModule,
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
