import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonPageRoutingModule } from './pokemon-page-routing.module';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { PokemonPageComponent } from './pokemon-page.component';

@NgModule({
  declarations: [PokemonPageComponent],
  imports: [CommonModule, PokemonPageRoutingModule, IonicModule, SharedModule],
  exports: [IonicModule],
})
export class PokemonPageModule {}
