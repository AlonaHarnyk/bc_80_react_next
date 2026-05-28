import { useState } from 'react';
import Books from '../Books/Books';
import { Tabs, type Tab } from '../Tabs/Tabs';
import type { TabVariant } from '../../types';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabVariant>('books');
  const tabsConfig: Tab[] = [
    {
      textContent: 'Books',
      handler: () => {},
    },
    {
      textContent: 'User',
      handler: () => {},
    },
  ];
  return (
    <>
      <Tabs tabs={tabsConfig} />
      {activeTab === 'books' && <Books />}
      {/* {activeTab === 'user' && <Books />} */}
    </>
  );
}
