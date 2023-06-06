import { createContext, useState,useMemo } from "react";
export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const { children } = props;
    const [isLogin, setIsLogin] = useState(false)
    const [infoUser, setInfoUser] = useState({})
    const [idUser, setIdUser] = useState("")
    const contextValue = useMemo(() => {
        return { isLogin, setIsLogin, infoUser, setInfoUser, idUser, setIdUser };
    }, [isLogin, setIsLogin, infoUser, setInfoUser, idUser, setIdUser]);

    return (
        <AppContext.Provider
            value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}