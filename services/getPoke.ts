import { axios } from "./index";
import { Pokemon } from "../interfaces";

export const getPoke = async (prop:string) => {
    const { data } = await axios.get<Pokemon>(`/pokemon/${prop}`);
    const { name, id, sprites } = data;
    return { name, id, sprites };
}