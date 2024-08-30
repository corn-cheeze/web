"use client";

import { RefObject, useRef, useState } from "react";

const page = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [idIsValid, setIdIsValid] = useState(true);
  const [pwIsValid, setPwIsValid] = useState(true);
  const idRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);

  const handleBlur = (ref: RefObject<HTMLInputElement>) => {
    const refValue = ref.current?.value;

    if (refValue) {
      const ID_REGEX = /^(?=.*[a-z])[a-z0-9-_]{5,20}$/; // 5~20자, 소문자 하나는 반드시 포함, 숫자/-/_ 는 선택적
      const PW_REGEX =
        /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&_\-])[A-Za-z\d@$!%*?&_\-]{8,16}$/; // 8~16자, 소문자, 숫자, 특수문자 반드시 포함, 대문자는 선택적

      if (ref === idRef) {
        setId(refValue);
        isValidValue(refValue, ID_REGEX, true);
      } else {
        setPw(refValue);
        isValidValue(refValue, PW_REGEX, false);
      }
    }
  };

  const isValidValue = (idValue: string, regex: RegExp, isId: boolean) => {
    if (!regex.test(idValue)) {
      isId ? setIdIsValid(false) : setPwIsValid(false);
    } else {
      isId ? setIdIsValid(true) : setPwIsValid(true);
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
              onBlur={() => handleBlur(idRef)}
              className="h-12 rounded-xl border border-solid border-slate-300 pl-3"
            />
            <input
              type="password"
              placeholder="비밀번호"
              ref={pwRef}
              onBlur={() => handleBlur(pwRef)}
              className="h-12 rounded-xl border border-solid border-slate-300 pl-3"
            />
            <input
              type="text"
              placeholder="비밀번호 확인"
              className="h-12 rounded-xl border border-solid border-slate-300 pl-3"
            />
          </div>
          <section>
            {!idIsValid && (
              <p>
                아이디 : 5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용
                가능합니다.
              </p>
            )}
            {!pwIsValid && (
              <p>
                비밀번호: 8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해
                주세요.
              </p>
            )}
          </section>
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
