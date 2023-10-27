"use client"
import { QueryContext } from '@/components/QueryContext';
import { useContext, useState } from 'react';
import responses from '@/util/responses';
export default function Question({}) {
    
 const { answer, setAnswer, query, setRenderAnswer, input, setInput} = useContext(QueryContext);
        const officialQueryStatement = "Claire Voyante, I call upon you:"

    return (
        <div className='block text-black space-y-2 w-full font-extralight'>
            <input value={input}
                placeholder='What do you wish to know?'
                className='text-2xl w-full p-5 rounded'
                onChange={(event) => {
                    setInput(event.target.value);
                }}
            />
            <button
                className='bg-blue-500 rounded p-3 block w-1/2 mx-auto'
                onClick={() => {
                    if (query == officialQueryStatement) {
                        if (answer.length) {
                            if (answer.length > officialQueryStatement.length) {
                                setAnswer(prev => prev.slice(0, officialQueryStatement.length));  
                            } 
                            setRenderAnswer(true);
                        } else {
                            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                            setAnswer(randomResponse);
                            setRenderAnswer(true);
                        }
                    } else {
                        console.log('NOT RIGHT CONDITIONS');
                    }
                }}
            >Summon</button>
        </div>
    )
}