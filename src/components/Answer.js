import { useContext } from 'react';
import { QueryContext } from '@/components/QueryContext';

export default function Answer() {
    const { answer, setAnswer, setQuery,
        setIsQueryEnter,setRenderAnswer, setInput, setCount } = useContext(QueryContext);

    return (
        <div className='fade-in space-y-10 font-extralight '>
            <p className="text-5xl mx-auto w-1/2 text-center ">{answer}</p>
            <button
                className='bg-blue-500 rounded p-3 w-1/3 block full mx-auto'
                onClick={() => {
                    setRenderAnswer(false);
                    setCount(0);
                    setInput("");
                    setIsQueryEnter(false);
                    setQuery("");
                    setAnswer("");
                }}
            >Try Again</button>
        </div>
    )
};