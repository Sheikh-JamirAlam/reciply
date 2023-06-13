/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useRef, Dispatch, SetStateAction } from "react";

type Props = {
  imageUrl: string;
  setImageUrl: Dispatch<SetStateAction<string>>;
};

const ImageUpload = (props: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = () => {
    inputRef.current?.click();
  };

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    props.setImageUrl(URL.createObjectURL(file));
  };

  return (
    <div onClick={handleImageUpload} className="h-48 w-48 mx-auto mt-20 bg-gray-300">
      <img src={props.imageUrl !== "" ? props.imageUrl : ""} alt="" className="h-48 w-48 object-cover" />
      <input type="file" ref={inputRef} onChange={handleImageChange} style={{ display: "none" }} />
    </div>
  );
};

export default ImageUpload;
