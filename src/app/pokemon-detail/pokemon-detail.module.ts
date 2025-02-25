import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonDetailRoutingModule } from './pokemon-detail-routing.module';
import { IonicModule } from '@ionic/angular';
import { PokemonDetailComponent } from './pokemon-detail.component';

@NgModule({
  exports: [],
  declarations: [PokemonDetailComponent],
  imports: [CommonModule, IonicModule, PokemonDetailRoutingModule],
})
export class PokemonDetailModule {}
