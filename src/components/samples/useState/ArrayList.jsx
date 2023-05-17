import { useState } from 'react';

function createInitialTodos() {
  const initialTodos = [];
  for (let i = 0; i < 10; i++) {
    initialTodos.push({
      id: i,
      text: 'Item ' + (i + 1),
    });
  }
  return initialTodos;
}

export default function ArrayList() {
  const [todos, setTodos] = useState(createInitialTodos);
  const [text, setText] = useState('');

  const onChangeTodo = e => {
    setText(e.target.value);
  };

  const handleAddTodo = () => {
    /// you need to create a new one (or make a copy of an existing one), and then set state to use the new array.
    let _newArray = [
      {
        id: todos.length,
        text: text,
      },
      ...todos,
    ];
    setText('');
    setTodos(_newArray);
  };
  return (
    <>
      <input value={text} onChange={onChangeTodo} />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </>
  );
}
