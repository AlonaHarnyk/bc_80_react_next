import ContactsCategories from '@/components/ContactsCategories/ContactsCategories';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <ContactsCategories />
      {children}
    </div>
  );
}

export default Layout;
