interface LayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  modal: React.ReactNode;
}

function Layout({ children, sidebar, modal }: LayoutProps) {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      {sidebar}
      {children}
      {modal}
    </div>
  );
}

export default Layout;
