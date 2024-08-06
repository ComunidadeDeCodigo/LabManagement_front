import { AlunoAccount } from "../AlunoAccount";
import { httpClient } from "../httpClient";

type AlunoAccountsResponse =  Array<AlunoAccount>;

export async function getAll(){
    const {data} = await httpClient.get<AlunoAccountsResponse>("/aluno-accounts");
    return data;
}