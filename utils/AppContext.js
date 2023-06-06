import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const { children } = props;
    //data use chung
    const [isLogin, setIsLogin] = useState(false)
    const [infoUser, setInfoUser] = useState({})

    return (
        // bỏ isLogin vào kho để reuse
        <AppContext.Provider
         value={{ isLogin, setIsLogin, infoUser, setInfoUser }}>
            {children}
        </AppContext.Provider>
    )
}