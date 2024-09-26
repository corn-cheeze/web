"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css"; // Quill 스타일 시트

const page = () => {
  const [content, setContent] = useState("");

  return (
    <div>
      <h1>글쓰기</h1>
      <ReactQuill value={content} onChange={setContent} />
    </div>
  );
};

export default page;
