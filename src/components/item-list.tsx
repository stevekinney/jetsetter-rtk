import { toKebabCase } from '../lib/kebab-case';
import Item from './item';

type ItemsProps = {
  title: string;
};

const ItemList = ({ title = 'Items' }: ItemsProps) => {
  const id = toKebabCase(title);
  const itemIds: string[] = [];

  return (
    <section id={id} className="w-full p-4 border-2 border-primary-200">
      <header className="mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
      </header>
      <ul className="flex flex-col gap-2">
        {itemIds.map((itemId) => (
          <Item key={itemId} itemId={itemId} />
        ))}
      </ul>
      {!itemIds.length && (
        <p className="text-primary-400">(Nothing to show.)</p>
      )}
    </section>
  );
};

export default ItemList;
