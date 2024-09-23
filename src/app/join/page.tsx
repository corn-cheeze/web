"use client";

import { useEffect, useState } from "react";

const page = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");

  const [idIsValid, setIdIsValid] = useState(true);
  const [pwIsValid, setPwIsValid] = useState(true);
  const [pwCheckIsValid, setPwCheckIsValid] = useState(true);

  const [idIsEnterd, setIdIsEnterd] = useState(true);
  const [pwIsEnterd, setPwIsEnterd] = useState(true);
  const [pwCheckIsEnterd, setPwCheckIsEnterd] = useState(true);

  useEffect(() => {
    pw === pwCheck ? setPwCheckIsValid(true) : setPwCheckIsValid(false);
  }, [pwCheck]);

  const handleValidation = (value: string, type: "id" | "pw" | "pwCheck") => {
    const isEntered = !!value;
    const ID_REGEX = /^(?=.*[a-z])[a-z0-9-_]{5,20}$/; // 5~20자, 소문자 하나는 반드시 포함, 숫자/-/_ 는 선택적
    const PW_REGEX =
      /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&_\-])[A-Za-z\d@$!%*?&_\-]{8,16}$/; // 8~16자, 소문자, 숫자, 특수문자 반드시 포함, 대문자는 선택적

    switch (type) {
      case "id":
        setId(value);
        setIdIsEnterd(isEntered);
        handleValidate(value, ID_REGEX, setIdIsValid);
        break;
      case "pw":
        setPw(value);
        setPwIsEnterd(isEntered);
        handleValidate(value, PW_REGEX, setPwIsValid);
        break;
      case "pwCheck":
        setPwCheck(value);
        setPwCheckIsEnterd(isEntered);
        break;
      default:
        break;
    }
  };

  const handleValidate = (
    value: string,
    regex: RegExp,
    setValidity: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    setValidity(regex.test(value));
  };

  const handleJoin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const ARE_ALL_VALUES_ENTERED = !!id && !!pw && !!pwCheck;
    const ARE_ALL_VALUES_VALID = idIsValid && pwIsValid && pwCheckIsValid;

    !id && setIdIsEnterd(false);
    !pw && setPwIsEnterd(false);
    !pwCheck && setPwCheckIsEnterd(false);

    ARE_ALL_VALUES_ENTERED && ARE_ALL_VALUES_VALID && console.log("hi");
  };

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <div className="flex w-[420px] flex-col justify-center gap-12 rounded-lg border border-solid border-rightGray px-6 py-12">
        <h1 className="text-center text-3xl font-black text-pointColor1">
          CORNCHEEZE
        </h1>
        <form onSubmit={handleJoin} className="flex flex-col gap-4">
          <section className="flex flex-col gap-4">
            <input
              type="text"
              value={id}
              placeholder="아이디"
              onBlur={(e) => handleValidation(e.target.value, "id")}
              onChange={(e) => setId(e.target.value)}
              className="h-14 rounded-sm border border-solid border-rightGray pl-3 placeholder-rightGray focus:outline-mainColor"
            />
            <input
              type="text"
              placeholder="닉네임"
              className="h-14 rounded-sm border border-solid border-rightGray pl-3 placeholder-rightGray focus:outline-mainColor"
            />
            <input
              type="password"
              value={pw}
              placeholder="비밀번호"
              onBlur={(e) => handleValidation(e.target.value, "pw")}
              onChange={(e) => setPw(e.target.value)}
              className="h-14 rounded-sm border border-solid border-rightGray pl-3 placeholder-rightGray focus:outline-mainColor"
            />
            <input
              type="password"
              placeholder="비밀번호 확인"
              value={pwCheck}
              // onBlur={() => handleBlur(pwCheckRef)}
              onChange={(e) => setPwCheck(e.target.value)}
              className="h-14 rounded-sm border border-solid border-rightGray pl-3 placeholder-rightGray focus:outline-mainColor"
            />
          </section>
          <section className="flex flex-col gap-2 text-xs text-pointColor2">
            {!idIsEnterd ? (
              <p>･ 아이디 : 필수 정보입니다.</p>
            ) : (
              !idIsValid && (
                <p>
                  ･ 아이디 : 5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용
                  가능합니다.
                </p>
              )
            )}
            {!pwIsEnterd ? (
              <p>･ 비밀번호 : 필수 정보입니다.</p>
            ) : (
              !pwIsValid && (
                <p>
                  ･ 비밀번호: 8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해
                  주세요.
                </p>
              )
            )}
            {!pwCheckIsEnterd ? (
              <p>･ 비밀번호 확인 : 필수 정보입니다.</p>
            ) : (
              !pwCheckIsValid && (
                <p>
                  ･ 비밀번호 확인: 비밀번호가 일치하지 않습니다. 다시 입력해
                  주세요.
                </p>
              )
            )}
          </section>
          <button className="h-12 rounded-sm bg-mainColor font-bold tracking-wider text-white">
            회원가입
          </button>
        </form>
      </div>
    </main>
  );
};

export default page;
