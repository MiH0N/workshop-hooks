import { useEffect, useState } from 'react';

export default function TodoList() {
  const [todoList, setTodoList] = useState(null);
  useEffect(() => {
    async function fetchTodo() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
      const fetchedTodos = await response.json();
      setTodoList(fetchedTodos.slice(0, 10));
    }
    fetchTodo();
  }, []);

  return (
    <div style={{ padding: '0 1rem' }}>
      {!!todoList ? (
        todoList.map((todo, index) => (
          <div key={index} className='todo-item'>
            {todo.completed ? <>✅</> : <>❌</>}
            <h6>{todo.title}</h6>
          </div>
        ))
      ) : (
        <div>Not todo :(</div>
      )}
    </div>
  );
}
