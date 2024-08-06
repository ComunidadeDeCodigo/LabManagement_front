import {iconsMap} from "./iconsMap"

interface AlunoAccountTypeIconProps {
    type: keyof typeof iconsMap
}
export function AlunoAccountTypeIcon({type}:AlunoAccountTypeIconProps){
    const Icon = iconsMap[type]

    return <Icon />
}