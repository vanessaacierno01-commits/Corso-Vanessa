import React, { useState } from 'react';
import Input from './input';
import Button from './button';

export default function TodoForm({ onAdd }) {
const [text, setText] = useState('');

const submit = (e) => {
e?.preventDefault();
if (!text.trim()) return;
onAdd(text);
setText('');
};

return (
<form className="card form-row" onSubmit={submit}>
<Input
value={text}
onChange={setText}
placeholder="Aggiungi un task..."
/>
<Button type="submit">Aggiungi</Button>
</form>
);
}