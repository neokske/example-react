import { Pokemon } from './types';

interface HttpResponse<T> extends Response {
  parsedBody?: T;
}
export async function http<T>(request: RequestInfo): Promise<HttpResponse<T>> {
  const response: HttpResponse<T> = await fetch(request);
  response.parsedBody = await response.json();
  return response;
}

export const getPokemon = (pokemonName: string) =>
  http<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
