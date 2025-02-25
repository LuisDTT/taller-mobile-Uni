import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { PokemonHomeComponent } from './pokemon-home/pokemon-home.component';

@NgModule({
  declarations: [PokemonListComponent, PokemonHomeComponent],
  imports: [CommonModule, IonicModule, RouterModule],
  exports: [PokemonListComponent, PokemonHomeComponent, CommonModule],
})
export class SharedModule {}
