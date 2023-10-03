import Image from 'next/image'
import Link from 'next/link'
import { prisma } from './db'
import TodoItem from './components/TodoItem';
import { redirect } from 'next/navigation';
function getTodos(){
  return prisma.todo.findMany();
}
export default async function Home() {
  async function toggleTodo(id: string, complete: boolean){
    'use server'
    console.log(id, complete);
    prisma.todo.update({where:{id}, data:{complete}})
   // redirect('/new')
  }
  const todos = await getTodos()
  //await prisma.todo.create({data: {title: 'test', complete: false}})
  //console.log(todos+ 'creates');//this will not run because this file runs on the server
  console.log('hi')//it will run on the server in the terminal will be shown not in the browser
  return (
    <>
    <header className='flex justify-between items-center mb-4'>
    <h1 className='text-2xl'>Todos</h1>
    <Link href='/new' className='border border-slate-300 px-2 py-1 rounded hover:bg-slate-700
     focus-within:bg-slate-700 outline-none'>New</Link>
    </header>
    <ul className='pl-4'>
    {
      todos.map((todo)=><TodoItem key={todo.id} toggleTodo={toggleTodo} {...todo} />)
    }
    </ul>
    </>
    )
}
