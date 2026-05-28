import Button from '../Button/Button';

export interface Tab {
  textContent: string;
  handler: () => void;
}
interface TabsProps {
  tabs: Tab[];
}

export function Tabs({ tabs }: TabsProps) {
  return (
    <ul>
      {tabs.map(tab => (
        <li key={tab.textContent}>
          <Button title={tab.textContent} clickHandler={tab.handler} />
        </li>
      ))}
    </ul>
  );
}
