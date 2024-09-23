"use client";

import Link from "next/link";
import { useRef, useState } from "react";

const page = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const [test, setTest] = useState(false);
  const [stayLogin, setStayLogin] = useState(false);

  const handleBlur = () => {
    // if (idRef.current && idRef.current.value !== "") {
    //   setId(idRef.current.value);
    //   handleTest();
    // }
  };

  const handleTest = () => {
    console.log(`hi ${id}`);
    console.log(test);
    id === "hi" && setTest(true);
  };

  const handleStayLogin = () => {
    setStayLogin(!stayLogin);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("제출");
  };

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <div className="flex w-[420px] flex-col justify-center gap-12 rounded-lg border border-solid border-rightGray px-6 py-12">
        <h1 className="text-center text-3xl font-black text-pointColor1">
          CORNCHEEZE
        </h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              value={id}
              placeholder="아이디"
              onBlur={handleBlur}
              onChange={(e) => setId(e.target.value)}
              className="h-14 rounded-sm border border-solid border-rightGray pl-3 placeholder-rightGray focus:outline-mainColor"
            />
            <input
              type="text"
              value={pw}
              placeholder="비밀번호"
              onChange={(e) => setPw(e.target.value)}
              className="h-14 rounded-sm border border-solid border-rightGray pl-3 placeholder-rightGray focus:outline-mainColor"
            />
          </div>
          <label className="flex items-center gap-2 pb-2 text-gray">
            <input
              type="checkbox"
              checked={stayLogin}
              onChange={handleStayLogin}
              className="h-5 w-5 appearance-none rounded-full border border-solid border-gray checked:border-none checked:bg-mainColor"
            />
            로그인 상태 유지
          </label>
          {id === "hi" && <p>Warning</p>}
          <button className="h-12 rounded-sm bg-mainColor font-bold tracking-wider text-white">
            로그인
          </button>
        </form>
        <section className="flex justify-between text-gray">
          <Link href="join">회원가입</Link>
          <div className="flex gap-4">
            <button>아이디 찾기</button>
            <button>비밀번호 찾기</button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default page;
