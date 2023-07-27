import { createContext, useState, useMemo } from "react";
export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const { children } = props;
    const [showDrawer, setShowDrawer] = useState(false)
    const contextValue = useMemo(() => {
        return { showDrawer, setShowDrawer };
    }, [showDrawer, setShowDrawer]);
    return (
        <AppContext.Provider
            value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}