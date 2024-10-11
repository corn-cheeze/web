"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css"; // Quill 스타일 시트

const ReactModule = () => {
  return (
    <>
      <div className="ql-formats">
        <select className="ql-header" defaultValue="7">
          <option value="1">Header 1</option>
          <option value="2">Header 2</option>
          <option value="3">Header 3</option>
          <option value="4">Header 4</option>
          <option value="5">Header 5</option>
          <option value="6">Header 6</option>
          <option value="7">Normal</option>
        </select>
        <select className="ql-size" defaultValue="medium">
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
          <option value="huge">Huge</option>
        </select>
        <select className="ql-font" defaultValue="sans-serif" />
      </div>
      <div className="ql-formats">
        <button className="ql-bold" />
        <button className="ql-italic" />
        <button className="ql-underline" />
        <button className="ql-strike" />
        <button className="ql-blockquote" />
      </div>

      <div className="ql-formats">
        <button className="ql-list" value="ordered" />
        <button className="ql-list" value="bullet" />
        <button className="ql-indent" value="-1" />
        <button className="ql-indent" value="+1" />
      </div>
      <div className="ql-formats">
        <select className="ql-color" />
        <select className="ql-background" />
        <select className="ql-align" />
      </div>
      <div className="ql-formats">
        <button className="ql-code-block" />
        <button className="ql-link" />
        <button className="ql-image" />
        <button className="ql-video" />
      </div>
    </>
  );
};

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
    "code-block",
    "clean",
  ];

  const modules: {} = useMemo(
    () => ({
      toolbar: {
        container: "#toolBar",
      },
    }),
    [],
  );

  return (
    <div>
      <h1>글쓰기</h1>
      <div id="toolBar">
        <ReactModule />
      </div>
      <ReactQuill theme="snow" modules={modules} formats={formats} />
    </div>
  );
};

export default page;
