import axios from "axios";
import { PokemonDetail } from "../interfaces/PokemonDetail";
import { resolve } from "path";

export async function getPokemonDetails(name: string): Promise<PokemonDetail> {
    const endpoint = `${process.env.REACT_APP_POKEAPI}/pokemon/${name}`;

    const response = await axios.get<PokemonDetail>(endpoint);

    await new Promise((resolve) => setTimeout(resolve, 2000))

    return response.data;
}