const page = () => {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <div className="flex w-[400px] flex-col justify-center gap-6 rounded-3xl border border-solid border-slate-300 px-6 py-12">
        <h1 className="text-center">JOIN</h1>
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
