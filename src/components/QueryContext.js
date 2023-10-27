"use client"
import { createContext, useState } from 'react';

export const QueryContext = createContext();

export function QueryProvider({children}) {
    const [answer, setAnswer] = useState("");
    const [query, setQuery] = useState("");
    const [isQueryEnter, setIsQueryEnter] = useState(false);
    const [renderAnswer, setRenderAnswer] = useState(false);
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");
    
    return (
        <QueryContext.Provider value={{
            answer, setAnswer, query,
            setQuery, isQueryEnter, setIsQueryEnter,
            renderAnswer, setRenderAnswer,
            count, setCount, input, setInput
        }}>
            {children}
        </QueryContext.Provider>
    )
}