'use client'
type TodoItemProps = {
    id: string;
    title: string;
    complete: boolean;
    toggleTodo: (id: string, complete: boolean) => void //this is how you add a type to a function 
}
const TodoItem = ({id, title, complete, toggleTodo}: TodoItemProps) => {
  return (
    <li className='flex gap-1 items-center'>
    <input 
    id={id} 
    type='checkbox' 
    className='cursor-pointer peer' 
    defaultChecked={complete} 
    // checked={complete}
    onChange={(e) => toggleTodo(id, e.target.checked)}
    />
    <label htmlFor={id} className="cursor-pointer peer-checked:line-through">{title}</label>
    </li>
    
  )
}
export default TodoItem