import React, { useRef } from "react";

interface IFileUploadProps {
  file: File | null;
  setFile: Function;
  accept?: string;
}

export function FileUpload({ file, setFile, accept = "*" }: IFileUploadProps) {
  const fileInput = useRef<HTMLInputElement>(null);

  const fileOnChanged = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const file = files[0];

      setFile(file);
    }
  };

  const fileOnDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    const droppedFiles = event.dataTransfer.files;

    if (droppedFiles && droppedFiles.length > 0) {
      const files = Array.from(droppedFiles);
      const file = files[0];
      setFile(file);
    }
  };

  return (
    <div
      className="flex justify-content-center align-items-center flex-column border-round border-1 border-solid border-200 w-full h-30rem cursor-pointer"
      onClick={() => fileInput.current?.click()}
      onDrop={fileOnDrop}
      onDragOver={(event) => event.preventDefault()}
    >
      <input
        type="file"
        style={{ display: "none" }}
        accept={accept}
        ref={fileInput}
        onChange={fileOnChanged}
      />
      <i className="pi pi-image mt-3 p-5 opacity-60 text-7xl"></i>
      <span className="my-5">{file?.name || "Drag and Drop Image Here"}</span>
    </div>
  );
}
