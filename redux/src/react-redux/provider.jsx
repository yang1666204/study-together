import React, { createContext } from "react"

const Context = createContext(null)

function Provider({ store, context, children }) {
    return <Context.Provider value={store}>{children}</Context.Provider>
}
export { Context, Provider }