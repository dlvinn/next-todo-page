import Link from 'next/link'
import { prisma } from '../db';
import { redirect } from 'next/navigation';
const Page = () => {
  const createTodo = async(data: FormData) => {//server actions must be async functions
    'use server'
    const title = data.get('title')?.valueOf();
    if(typeof title !== 'string' || title.length === 0){
      throw new Error('you should provide a title');
    }
    await prisma.todo.create({data: {title, complete: false}})
    redirect('/')
  }
  return (
    <>
    <header className='flex justify-between items-center mb-4'>
    <h1 className='text-2xl'>New Todo</h1>
    </header>
    <form action={createTodo}>
      <input name='title' type='text' className='border border-slate-300 bg-transparent rounded px-2 py-1
      outline-none focus-within:border-slate-100'/>
      <div className='flex gap-1 justify-end'>
      <Link 
        href='..' 
        className='border border-slate-300 px-2 py-1 rounded hover:bg-slate-700
      focus-within:bg-slate-700 outline-none'
      >
      Cancel
      </Link>
        <button 
        type='submit' 
        className='border border-slate-300 px-2 py-1 rounded hover:bg-slate-700
      focus-within:bg-slate-700 outline-none'
      >
      Submit
      </button>
      </div>
    </form>
    </>
  )
}
export default Page