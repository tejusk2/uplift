import { createContext, useContext, useState } from "react";

const HomeContext = createContext()

export default function UserProvider({children}){
    const [rowData, setRowData] = useState([])
    return(
        <HomeContext.Provider value = {{rowData, setRowData}}>
            {children}
        </HomeContext.Provider>
    )
}

export const useHome = () => useContext(HomeContext)