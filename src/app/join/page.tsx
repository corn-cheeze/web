"use client";

import { useEffect, useRef, useState } from "react";

const page = () => {
  const [id, setId] = useState("");
  const idRef = useRef<HTMLInputElement>(null);

  const handleBlur = () => {
    if (idRef.current) {
      const idValue = idRef.current.value;
      if (idValue !== "") {
        setId(idValue);
        isValidId(idValue);
      }
    }
  };

  const isValidId = (idValue: string) => {
    const regex = /^(?=[a-z0-9-_]{5,20}$)(?=.*[a-z])[a-z0-9-_]{5,20}$/; // 5~20자, 소문자 하나는 반드시 포함, 숫자/-/_ 는 선택적
    if (!regex.test(idValue)) {
      console.log("id is not valid");
    } else {
      console.log("id is valid");
    }
  };

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <div className="flex w-[400px] flex-col justify-center gap-6 rounded-3xl border border-solid border-slate-300 px-6 py-12">
        <h1 className="text-center">JOIN</h1>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="아이디"
              ref={idRef}
              onBlur={handleBlur}
              className="h-12 rounded-xl border border-solid border-slate-300 pl-3"
            />
            <input
              type="text"
              placeholder="비밀번호"
              className="h-12 rounded-xl border border-solid border-slate-300 pl-3"
            />
            <input
              type="text"
              placeholder="비밀번호 확인"
              className="h-12 rounded-xl border border-solid border-slate-300 pl-3"
            />
          </div>
          <section>
            <article>
              <label>
                <input type="checkbox" />
                <span>[필수]</span> 000 이용 약관
              </label>
              <p className="h-28 rounded-xl border border-solid border-slate-300"></p>
            </article>
            <article>
              <label>
                <input type="checkbox" />
                <span>[필수]</span> 000 이용 약관
              </label>
              <p className="h-28 rounded-xl border border-solid border-slate-300"></p>
            </article>
            <label>
              <input type="checkbox" />
              전체 동의하기
            </label>
          </section>
          <button className="h-12 rounded-xl bg-slate-500 text-white">
            회원가입
          </button>
        </form>
      </div>
    </main>
  );
};

export default page;
