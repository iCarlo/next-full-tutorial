"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
  const [imagePicked, setImagePicked] = useState(null);
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setImagePicked(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setImagePicked(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!imagePicked && <p>No Image picked yet.</p>}
          {imagePicked && (
            <Image src={imagePicked} alt="Image picked by the user" fill />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg"
          ref={inputRef}
          onChange={handleChange}
          required
        />
        <button className={classes.button} type="button" onClick={handleClick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
