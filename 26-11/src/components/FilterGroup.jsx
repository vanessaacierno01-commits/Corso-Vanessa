import React from 'react';

export default function FilterGroup({ value = 'all', onChange }) {
const items = [
{ key: 'all', label: 'Tutti' },
{ key: 'active', label: 'Attivi' },
{ key: 'completed', label: 'Completati' },
];

return (
<div className="filter-group">
{items.map(it => (
<button
key={it.key}
onClick={() => onChange(it.key)}
className={value === it.key ? 'active' : ''}
>
{it.label}
</button>
))}
</div>
);
}