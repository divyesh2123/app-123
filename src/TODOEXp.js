import React, { useState } from 'react'
import TodoList from './TodoList';
import { createTodos } from './utility';

export default function TODOEXp() {

    const [tab, setTab] = useState('all');
  const [isDark, setIsDark] = useState(false);
  const todos = createTodos();

  return (
    <>
      <button onClick={() => setTab('all')}>
        All
      </button>
      <button onClick={() => setTab('active')}>
        Active
      </button>
      <button onClick={() => setTab('completed')}>
        Completed
      </button>
      <br />
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={e => setIsDark(e.target.checked)}
        />
        Dark mode
      </label>
      <hr />
      <TodoList
        todos={todos}
        tab={tab}
        theme={isDark ? 'dark' : 'light'}
      />
    </>
  );
}
