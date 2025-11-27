import React, { useState, useMemo } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import FilterGroup from './components/FilterGroup';
import Button from './components/button';

function App() {
const [tasks, setTasks] = useState(() => {
// esempio iniziale (vuoto nella versione reale)
return [
// { id: 1, text: 'Esempio task', completed: false, createdAt: Date.now() }
];
});

const [filter, setFilter] = useState('all'); // all | active | completed
const [theme, setTheme] = useState('light'); // light | dark

// helpers: add, delete, toggle, edit
const addTask = (text) => {
if (!text || !text.trim()) return;
const newTask = {
id: Date.now(),
text: text.trim(),
completed: false,
createdAt: Date.now(),
};
setTasks(prev => [newTask, ...prev]);
};

const deleteTask = (id) => setTasks(prev => prev.filter(t => t.id !== id));

const toggleTask = (id) => setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));

const editTask = (id, newText) => {
setTasks(prev => prev.map(t => t.id === id ? { ...t, text: newText } : t));
};

// filtered list
const filteredTasks = useMemo(() => {
if (filter === 'active') return tasks.filter(t => !t.completed);
if (filter === 'completed') return tasks.filter(t => t.completed);
return tasks;
}, [tasks, filter]);

const remaining = tasks.filter(t => !t.completed).length;

return (
<div className={`app ${theme === 'dark' ? 'theme-dark' : 'theme-light'}`}>
<div className="container">
<header className="header">
<h1>Todo List</h1>
<div className="header-actions">
<Button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>
{theme === 'light' ? '🌙 Dark' : '☀️ Light'}
</Button>
</div>
</header>

<main>
<TodoForm onAdd={addTask} />
<div className="controls">
<FilterGroup value={filter} onChange={setFilter} />
<div className="spacer" />
<div className="counter">{remaining} task rimanenti</div>
</div>

<TodoList
tasks={filteredTasks}
onDelete={deleteTask}
onToggle={toggleTask}
onEdit={editTask}
/>
</main>

<footer className="footer">
<p>Realizzata come esercizio • Atomic Design</p>
</footer>
</div>
</div>
);
}

export default App;
