const page = () => {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <div className="flex h-[400px] w-[400px] flex-col justify-center gap-6 rounded-3xl border border-solid border-slate-300 px-6">
        <h1 className="text-center">LOGIN</h1>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="아이디"
              className="h-12 rounded-xl border border-solid border-slate-300 pl-3"
            />
            <input
              type="text"
              placeholder="비밀번호"
              className="h-12 rounded-xl border border-solid border-slate-300 pl-3"
            />
          </div>
          <div className="flex gap-2 pb-2 text-slate-400">
            <input type="checkbox" />
            <label htmlFor="">로그인 상태 유지</label>
          </div>
          <button className="h-12 rounded-xl bg-slate-500 text-white">
            로그인
          </button>
        </form>
        <section className="flex justify-between text-slate-400">
          <button>회원가입</button>
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
