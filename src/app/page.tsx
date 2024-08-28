import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <h1>home</h1>
      <Link href="login">➡️ login</Link>
      <Link href="join">➡️ join</Link>
    </main>
  );
}
