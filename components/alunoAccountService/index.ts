import { create } from "./create";
import { del } from "./delete";
import { getAll } from "./getAll";
import { update } from "./update";

export const alunoAccountService = {
    create,
    getAll,
    update,
    delete:del,
}