import { createContext } from "react";
import React from "react";

export const DependencyContext = createContext({})

export function DepsProvider({children, services}) {
    return (
        <DependencyContext.Provider value={services}>
            {children}
        </DependencyContext.Provider>
    )
}