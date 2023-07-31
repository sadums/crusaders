import { Uploader } from "uploader"; // Do I even need 
import { UploadButton } from "react-uploader";
import { useState } from "react";

interface PictureUploaderProps {
  pictureState: string;
  setPictureState: (url: string) => void;
  uploadText: string;
}
interface FileObject {
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
            cropRatio: 1.5,
            cropShape: "rect",
            preview: true,
          },
        },
      }}
      onComplete={(files: FileObject[]) => {
        console.log(files);
        setPictureState(files[0].fileUrl);
        setIsUploaded(true);
      }}
    >
      {({ onClick }) => (
        <button
          className={
            isUploaded
              ? "bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              : "bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          }
          onClick={onClick}
        >
          {isUploaded ? "Image uploaded" : uploadText}
        </button>
      )}
    </UploadButton>
  );
}

export default PictureUploader;
