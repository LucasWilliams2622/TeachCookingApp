import { createContext, useState, useMemo } from "react";
export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const { children } = props;
    const [showDrawer, setShowDrawer] = useState(false)

    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    month = month < 10 ? `0${month}` : `${month}`;
    day = day < 10 ? `0${day}` : `${day}`;
    let currentDay = `${year}-${month}-${day}`

    const contextValue = useMemo(() => {
        return { showDrawer, setShowDrawer,currentDay };
    }, [showDrawer, setShowDrawer,currentDay]);
    return (
        <AppContext.Provider
            value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}