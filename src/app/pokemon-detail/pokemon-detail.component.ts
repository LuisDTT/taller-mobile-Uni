import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
  standalone: false,
})
export class PokemonDetailComponent implements OnInit {
  pokemon: any;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: ApiService,
  ) {}

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.loadPokemonDetails(name);
    }
  }

  loadPokemonDetails(name: string) {
    this.pokemonService.getPokemonDetails(name).subscribe({
      next: (data) => {
        this.pokemon = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error al obtener detalles:', error);
        this.isLoading = false;
      },
    });
  }
}
