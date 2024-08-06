import { httpClient } from "../httpClient";

interface CreateAlunoAccountProps{
    name: string;
    turma:"II"| "IG"
}

export async function create(props:CreateAlunoAccountProps){
    const {data} = await httpClient.post("aluno-accounts",props)

    return data
}