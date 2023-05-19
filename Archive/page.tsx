'use client'
import { ChangeEvent, FormEvent, useState } from 'react'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export default function Home() {
  const [ prompt, setPrompt ] = useState<string>('')

  const getStartup = async () => {
    const { data } = await axios.post('/api', {
      prompt,
    })
    return data;
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(!prompt) return;

    console.log(prompt)
    setPrompt('');

    const data = await getStartup();
    console.log(data);

  }

  return (
    <div className='w-screen h-screen flex justify-center items-center bg-slate-100'>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <div className='mb-1'>
          <p>Please provide an industry</p>
        </div>
        <div className='flex space-x-4'>
          <input 
            onChange={(event : ChangeEvent<HTMLInputElement>) => setPrompt(event.target.value)} 
            type="text" className="shadow-md p-4 text-xl w-[30rem]" 
            placeholder='Enter Text...'
            value={prompt}
            required></input>
          <button className="submit w-14 drop-shadow-lg p-2 bg-white flex justify-center items-center hover:bg-slate-400 active:scale-95" ><PaperAirplaneIcon className='w-8 h-8' /></button>
        </div>
      </form>
    </div>
  )
}
