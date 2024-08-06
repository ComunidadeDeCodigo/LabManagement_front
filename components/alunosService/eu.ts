import { Aluno } from "../aluno";
import { httpClient } from "../httpClient";

type ResponseData = Aluno

export async function eu(){
    const {data} = await httpClient.get<ResponseData>("/alunos/eu")
    return data
}