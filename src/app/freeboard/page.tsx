"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css"; // Quill 스타일 시트

const page = () => {
  const [content, setContent] = useState("");

  const formats: string[] = [
    "header",
    "size",
    "font",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "color",
    "background",
    "align",
    "script",
  ];

  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ size: ["small", false, "large", "huge"] }],
      [{ header: [1, 2, 3, 4, false] }],
      [{ color: [] }, { background: [] }, { align: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
    ],
  };

  return (
    <div>
      <h1>글쓰기</h1>
      <ReactQuill theme="snow" modules={modules} formats={formats} />
    </div>
  );
};

export default page;
