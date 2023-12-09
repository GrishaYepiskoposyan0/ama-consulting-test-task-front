import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { uploadRecord } from "../../../redux/recordSlice.jsx";

export const FileUploader = () => {
  const [file, setFile] = useState();
  const inputRef = useRef();
  const dispatch = useDispatch();
  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    dispatch(uploadRecord({ file }));
  };

  return (
    <div className="flex justify-center flex-col mt-6">
      <div className="flex justify-center">
        <label className="sr-only">Choose a file</label>
        <input ref={inputRef} type="file" onChange={handleFileChange} />
        {file && (
          <button
            type="button"
            onClick={() => {
              inputRef.current.value = null;
              setFile(null);
            }}
            className="text-red-600"
          >
            x
          </button>
        )}
      </div>
      {file && (
        <div className="mt-3 flex justify-start flex-col">
          <p>File details:</p>
          <ul>
            <li>Name: {file.name}</li>
            <li>Type: {file.type}</li>
            <li>Size: {file.size} bytes</li>
          </ul>
        </div>
      )}

      {file && (
        <button
          className="px-5 my-3 py-2 bg-[#0e7dfb] text-white rounded"
          onClick={handleUpload}
        >
          Upload a file
        </button>
      )}
    </div>
  );
};
