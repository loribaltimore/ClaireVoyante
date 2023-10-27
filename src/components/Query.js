"use client"
import { QueryContext } from '@/components/QueryContext';
import { useContext, useState } from 'react';

export default function Query({}) {
    const { answer, setAnswer, query,
        setQuery, isQueryEnter, setIsQueryEnter, count, setCount } = useContext(QueryContext);
    
    const officialQueryStatement = "Claire Voyante, I call upon you:"
    const alphabet = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM ";
    
    const handleChange = (event) => {
        if (!isQueryEnter) {
            if (event.nativeEvent.data !== '.') {
                setQuery(event.target.value);
            }
        } else {
            if (event.nativeEvent.data !== null) {
                setCount(prev => prev + 1);
                console.log(count);
            setQuery(officialQueryStatement.slice(0, count));
            } else {
                setQuery(officialQueryStatement.slice(0, count));
            }
            }
    };

    const handleKeyDown = (event) => {
        if (event.key == "." && (query.length === 0 || answer.length > 0)) {
                        setIsQueryEnter(!isQueryEnter);
        } else {
            if (isQueryEnter) {
                if (event.key !== "Backspace" && alphabet.indexOf(event.key) > -1) {
                    setAnswer(prev => prev.concat(event.key));
                } else if (event.key === "Backspace" ){
                    if (count > 0) {
                        setAnswer(answer.slice(0, answer.length - 1));
                        setCount(prev => prev - 1);
                    }
                }
            } else {
                 if (event.key === "Backspace") {
                     if (query.length == answer.length) {
                         setAnswer(answer.slice(0, answer.length - 1));
                         setCount(prev => prev - 1);
                     }
                };
            }
        }
    };

    return (
        <input
            className='text-black w-full p-5 rounded text-2xl font-extralight'
            placeholder='Claire Voyante, I call upon you:'
            value={!setIsQueryEnter ? officialQueryStatement.slice(0, count) : query}
            onChange={(event) => {
                handleChange(event)
            }}
            onKeyDown={(event) => {handleKeyDown(event);}}
        />
    )
}