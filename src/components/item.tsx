import clsx from 'clsx';
import { useState } from 'react';

type ItemProps = {
  itemId: string;
};

const Item = ({ itemId }: ItemProps) => {
  const [editing, setEditing] = useState(false);
  const item = { id: '1', name: 'Unnamed', packed: false };

  return (
    <li className="flex items-center gap-2">
      <input
        type="checkbox"
        className="focus:bg-red-500"
        checked={item.packed}
        id={`toggle-${item.id}`}
        onChange={() => {}}
      />
      <label
        htmlFor={`toggle-${item.id}`}
        className={clsx({ hidden: editing })}
      >
        {item.name}
      </label>
      <input
        value={item.name}
        id={`edit-${item.id}`}
        className={clsx('py-0 text-sm', { hidden: !editing })}
        onChange={() => {}}
      />
      <div className="flex gap-2">
        <button
          className="px-2 py-0 text-xs"
          aria-label={`Edit "${item.name}"`}
          onClick={() => setEditing(!editing)}
        >
          {editing ? '💾 Save' : '✍️ Edit'}
        </button>
        <button
          className="px-2 py-0 text-xs"
          aria-label={`Remove "${item.name}"`}
          onClick={() => {}}
        >
          🗑 Remove
        </button>
      </div>
    </li>
  );
};

export default Item;
