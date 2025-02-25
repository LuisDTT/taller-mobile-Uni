import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  standalone: false,
})
export class PokemonListComponent implements OnInit {
  pokemonList: any[] = [];
  private subscription: Subscription | undefined;
  constructor(private pokemonService: ApiService) {}

  ngOnInit() {
    this.loadAllPokemon();
  }

  loadAllPokemon() {
    this.subscription = this.pokemonService.getPokemonList(10).subscribe({
      next: (data) => {
        this.pokemonList = data;
      },
      error: (error) => {
        console.error('Error al obtener Pokémon:', error);
      },
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe(); // Desuscribirse para evitar fugas de memoria
  }
}
