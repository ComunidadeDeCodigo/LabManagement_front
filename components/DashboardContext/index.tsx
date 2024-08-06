import React, { createContext, useCallback, useState } from "react";
import { AlunoAccount } from "../AlunoAccount";

interface DashboardContextProps{
    areValuesVisible: boolean;
    isNewAddAccountModalOpen: boolean;
    isEditAccountModalOpen:boolean;
    accountBeignEdited: AlunoAccount | null

    toggleValuesVisibility():void;

    handleNewAddAccountModalOpen():void
    handleNewAddAccountModalClose():void

    handleEditAccountModalOpen(account:AlunoAccount):void
    handleEditAccountModalClose(): void
}

export const DashboardContext = createContext<DashboardContextProps>({} as DashboardContextProps)

export function DashboardProvider({children}:{children: React.ReactNode}){
    const [areValuesVisible, setAreValuesVisible] = useState(true)
    const [isNewAddAccountModalOpen,setIsNewAddAccountModalOpen] = useState(false)
    const [isEditAccountModalOpen,setIsEditAccountModalOpen] = useState(false)
    const [accountBeignEdited, setAccountBeignEdited] = useState<AlunoAccount | null>(null)

    const toggleValuesVisibility = useCallback(() =>{
        setAreValuesVisible((prevState) => !prevState)
    },[])

    function handleNewAddAccountModalOpen(){
        setIsNewAddAccountModalOpen(true)
    }
    function handleNewAddAccountModalClose(){
        setIsNewAddAccountModalOpen(false)
    }
    function handleEditAccountModalOpen(account:AlunoAccount){
        setAccountBeignEdited(account)
        setIsEditAccountModalOpen(true)
    }
    function handleEditAccountModalClose(){
        setAccountBeignEdited(null)
        setIsEditAccountModalOpen(false)
    }

    return (
        <DashboardContext.Provider
        value={{
            areValuesVisible,
            isNewAddAccountModalOpen,
            isEditAccountModalOpen,
            accountBeignEdited,
            toggleValuesVisibility,
            handleNewAddAccountModalOpen,
            handleNewAddAccountModalClose,
            handleEditAccountModalOpen,
            handleEditAccountModalClose,
        }}
        >
            {children}
        </DashboardContext.Provider>
    )
}