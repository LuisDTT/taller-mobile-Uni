import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getPokemonList(limit: number = 20): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}/pokemon?limit=${limit}`).pipe(
      map((response) => response.results), // Transformar la respuesta
      catchError(this.handleError), // Manejar errores
    );
  }

  getPokemonDetails(name: string): Observable<any> {
    return this.http
      .get<any>(`${this.apiUrl}/pokemon/${name}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Ocurrió un error:', error);
    return throwError(
      () => new Error('Ocurrió un error, inténtalo de nuevo más tarde.'),
    );
  }
}
