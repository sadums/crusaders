import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import { useState } from "react";

interface PictureUploaderProps {
  pictureState: { cropped: string; original: string };
  setPictureState: (url: { cropped: string; original: string }) => void;
  uploadText: string;
}

interface FileObject {
  originalFile: {
    fileUrl: string;
  };
  fileUrl: string;
}

function PictureUploader({
  pictureState,
  setPictureState,
  uploadText,
}: PictureUploaderProps) {
  //We should move this to the process .env file
  //Change the styles for the button to typescript

  const uploader = Uploader({ apiKey: "public_FW25bUsEgLaLmifCsyAEZMAxaX9j" });

  const [isUploaded, setIsUploaded] = useState(false);

  return (
    <UploadButton
      uploader={uploader}
      options={{
        multi: false,
        editor: {
          images: {
            crop: true,
            cropRatio: 1.2,
            cropShape: "rect",
            preview: true,
          },
        },
      }}
      onComplete={(files: FileObject[]) => {
        console.log(files[0].originalFile.fileUrl);
        console.log(files);
        setPictureState({
          cropped: files[0].fileUrl,
          original: files[0].originalFile.fileUrl,
        });
        setIsUploaded(true);
      }}
    >
      {({ onClick }) => (
        <button
          className={
            isUploaded
              ? "dark:bg-green-600 bg-green-500 hover:bg-green-700 text-black dark:text-white text-sm font-semibold py-1 px-2 rounded focus:outline-none focus:shadow-outline mr-3"
              : "bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 text-sm rounded focus:outline-none focus:shadow-outline mr-3"
          }
          onClick={onClick}
        >
          <div className="flex items-center">
          {isUploaded ? "Image Uploaded" : uploadText}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`${isUploaded ? "block" : "hidden"} h-8 w-8`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          </div>
        </button>
      )}
    </UploadButton>
  );
}

export default PictureUploader;
