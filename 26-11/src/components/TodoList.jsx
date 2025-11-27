import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ tasks, onDelete, onToggle, onEdit }) {
if (!tasks || tasks.length === 0) {
return <div className="card">Nessun task da mostrare</div>;
}

return (
<div>
{tasks.map(task => (
<TodoItem
key={task.id}
task={task}
onDelete={onDelete}
onToggle={onToggle}
onEdit={onEdit}
/>
))}
</div>
);
}