import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-col gap-4 py-2">
      <section className="flex justify-between text-pointColor1">
        <Link href="/" className="text-xl font-black">
          CORNCHEEZE
        </Link>
        <div className="text-lg font-bold">
          <Link href="login">로그인</Link>
          <span>/</span>
          <Link href="join">회원가입</Link>
        </div>
      </section>
      <nav className="bg-gradient-to-r from-bgColor from-[-20%] to-mainColor px-6 py-3 text-lg font-bold text-white">
        <ul className="">
          <li>
            <Link href="freeboard">자유게시판</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
