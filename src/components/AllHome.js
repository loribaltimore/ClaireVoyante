"use client"
import Query from '@/components/Query';
import Question from '@/components/Question';
import Answer from '@/components/Answer';
import Rules from '@/components/Rules';
import { useContext } from 'react';
import { QueryContext } from '@/components/QueryContext';

export default function AllHome() {
    const { answer, setAnswer, query, setQuery, isQueryEnter,
        setIsQueryEnter, renderAnswer, setRenderAnswer } = useContext(QueryContext);
    
  return (
      <div className='w-full block '>
          <h1 className=' text-4xl md:text-6xl text-gray-400 p-10'>Claire Voyante</h1>
            <div className={`${renderAnswer ? "fade-out" : null} space-y-3 mx-auto w-11/12 md:w-3/4 `}>
              <Query />
              <Question />
              <Rules />
          </div> 
          {
              renderAnswer ?
                  <Answer /> : null
          }
          
        </div>
  )
}