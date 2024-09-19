import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-col gap-4">
      <section className="flex justify-between text-pointColor1">
        <h1 className="bg-red-900 text-9xl font-black">CORNCHEEZE</h1>
        <div>
          <Link href="login">로그인</Link>
          <span>/</span>
          <Link href="join">회원가입</Link>
        </div>
      </section>
      <nav className="bg-mainColor text-white">
        <ul className="">
          <li className="text-9xl">자유게시판</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
