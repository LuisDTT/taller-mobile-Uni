import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailComponent } from './pokemon-detail.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [{ path: '', component: PokemonDetailComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonDetailRoutingModule {}
