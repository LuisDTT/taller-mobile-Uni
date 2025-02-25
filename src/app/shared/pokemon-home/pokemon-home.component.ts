import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-home',
  templateUrl: './pokemon-home.component.html',
  styleUrls: ['./pokemon-home.component.scss'],
  standalone: false,
})
export class PokemonHomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToPokemonList() {
    this.router.navigate(['home/pokemon']);
  }
}
