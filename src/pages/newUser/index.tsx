import React from "react";
import "./styles.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { userInputs } from "../../inputsSource";

type Props = {
  inputs?: any;
  title?: string;
};
const NewUser = (props: Props) => {
  const [file, setFile] = useState<MediaSource | Blob | any>("");
  console.log("🚀 ~ file: index.tsx ~ line 13 ~ NewUser ~ file", file);
  const [inputs, setInputs] = useState(userInputs);
  return (
    <div className="new-users">
      <div className="top">
        <h1>{"title"}</h1>
      </div>
      <div className="bottom">
        <div className="left">
          <img
            src={
              file
                ? window.URL.createObjectURL(file)
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            alt=""
          />
        </div>
        <div className="right">
          <form>
            <div className="formInput">
              <label htmlFor="file">
                Image: <DriveFolderUploadOutlinedIcon className="icon" />
              </label>
              <input
                type="file"
                id="file"
                onChange={(e) =>
                  setFile(e.target.files?.length !== 0 ? e.target.files : "")
                }
                style={{ display: "none" }}
              />
            </div>

            {inputs.map((input) => (
              <div className="formInput" key={input.id}>
                <label>{input.label}</label>
                <input type={input.type} placeholder={input.placeholder} />
              </div>
            ))}
            <button>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
