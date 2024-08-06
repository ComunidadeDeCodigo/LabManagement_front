import { httpClient } from "../httpClient";


interface updateAlunoAccountProps{
    id:string;
    name:string;
    turma:"II" | "IG"
}

export async function update({id, ...props}: updateAlunoAccountProps){
    const { data } = await httpClient.put(`/alunos-accounts/${id}`,props)

    return data
}