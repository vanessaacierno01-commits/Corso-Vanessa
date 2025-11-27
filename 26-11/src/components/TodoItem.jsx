import React, { useState } from 'react';
import Checkbox from './checkbox';
import Button from './button';

function formatDate(ts){
const d = new Date(ts);
return `Creato il ${d.getDate().toString().padStart(2,'0')}/${(d.getMonth()+1).toString().padStart(2,'0')}/${d.getFullYear()} ${d.getHours().toString().padStart(2,'0')}:${d.getMinutes().toString().padStart(2,'0')}`;
}

export default function TodoItem({ task, onDelete, onToggle, onEdit }) {
const [isEditing, setIsEditing] = useState(false);
const [draft, setDraft] = useState(task.text);

const handleSave = () => {
const trimmed = draft.trim();
if (!trimmed) return;
onEdit(task.id, trimmed);
setIsEditing(false);
};

return (
<div className="todo-item card">
<div>
<Checkbox checked={task.completed} onChange={() => onToggle(task.id)} />
</div>

<div className="todo-main">
<div className="todo-title">
{isEditing ? (
<input
value={draft}
onChange={e => setDraft(e.target.value)}
onKeyDown={(e) => {
if (e.key === 'Enter') handleSave();
if (e.key === 'Escape') { setIsEditing(false); setDraft(task.text); }
}}
autoFocus
/>
) : (
<div style={{display:'flex', alignItems:'center', gap:8, width:'100%'}}>
<div className={`todo-text ${task.completed ? 'completed' : ''}`}>{task.text}</div>
</div>
)}

<div style={{display:'flex', gap:8, alignItems:'center'}}>
{isEditing ? (
<>
<button className="action-btn" onClick={handleSave}>Salva</button>
<button className="action-btn" onClick={() => { setIsEditing(false); setDraft(task.text); }}>Annulla</button>
</>
) : (
<>
<button className="action-btn" onClick={() => setIsEditing(true)}>Modifica</button>
<button className="action-btn danger" onClick={() => onDelete(task.id)}>X</button>
</>
)}
</div>
</div>

<div className="todo-meta">{formatDate(task.createdAt)}</div>
</div>
</div>
);
}
