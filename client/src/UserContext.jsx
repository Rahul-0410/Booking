import axios from "axios";
import { createContex,useEffect} from "react";
import { useState } from "react";

export const UserContext= createContext({});


export function UserContextProvider({children}){
    const [user,setUser] = useState(null);
    useEffect(()=>{
        if(!user){
            axios.get('/profile')
        }
    })
   
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}