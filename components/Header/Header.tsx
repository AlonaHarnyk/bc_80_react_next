import Link from 'next/link';
export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          {/* <li>
            <a href=""></a>
          </li>
          <li>
            <a href=""></a>
          </li>
          <li>
            <a href=""></a>
          </li>
          <li>
            <a href=""></a>
          </li> */}
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/books">Books</Link>
          </li>
          <li>
            <Link href="/users">Users</Link>
          </li>
          <li>
            <Link href="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
