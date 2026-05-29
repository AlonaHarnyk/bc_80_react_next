import { useState } from 'react';
import Books from '../Books/Books';
import { Tabs, type Tab } from '../Tabs/Tabs';
import type { TabVariant } from '../../types';
import Users from '../Users/Users';
import Contacts from '../Contact/Contact';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabVariant>('books');

  const tabsConfig: Tab[] = [
    {
      textContent: 'Books',
      handler: () => {
        setActiveTab('books');
      },
    },
    {
      textContent: 'User',
      handler: () => {
        setActiveTab('users');
      },
    },
    {
      textContent: 'Contact',
      handler: () => {
        setActiveTab('contact');
      },
    },
  ];

  return (
    <>
      <Tabs tabs={tabsConfig} />
      {activeTab === 'books' && <Books />}
      {activeTab === 'users' && <Users />}
      {activeTab === 'contact' && <Contacts />}
    </>
  );
}
