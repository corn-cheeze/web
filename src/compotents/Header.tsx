import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-col gap-4">
      <section className="flex justify-between text-pointColor1">
        <h1 className="font-black">CORNCHEEZE</h1>
        <div>
          <Link href="login">로그인</Link>
          <span>/</span>
          <Link href="join">회원가입</Link>
        </div>
      </section>
      <nav className="h-[30px] w-full bg-mainColor px-2">
        <ul className="flex h-full">
          <li className="text-white">자유게시판</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
