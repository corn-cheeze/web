import Link from "next/link";

const Header = () => {
  return (
    <div>
      <section>
        <h1>home</h1>
        <div>
          <Link href="login">➡️ login</Link>
          <Link href="join">➡️ join</Link>
        </div>
      </section>
      <nav>
        <ul>
          <li>자유게시판</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
