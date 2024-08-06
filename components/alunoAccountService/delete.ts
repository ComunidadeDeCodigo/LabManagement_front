import { httpClient } from "../httpClient";

export async function del(id:string){
    await httpClient.delete(`aluno-accounts/${id}`)
}