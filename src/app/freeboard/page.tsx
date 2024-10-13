"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { Quill } from "react-quill";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css"; // Quill 스타일 시트

interface QuillIcons {
  [key: string]: string;
}

const page = () => {
  const [content, setContent] = useState("");
  const icons: QuillIcons = Quill.import("ui/icons") as QuillIcons;
  icons["video-file"] = "<span>V</span>"; // 비디오 파일 첨부 아이콘

  const videoHandler = async () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "video/*");
    input.click();

    input.onchange = async () => {
      const file = input.files ? input.files[0] : null;
      if (file) {
        console.log("video");
      }
    };
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
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
          ["link", "image", "video", "video-file"],
        ],
        handlers: {
          "video-file": videoHandler,
        },
      },
    }),
    [],
  );

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

  return (
    <div>
      <h1>글쓰기</h1>
      <ReactQuill theme="snow" modules={modules} formats={formats} />
    </div>
  );
};

export default page;
