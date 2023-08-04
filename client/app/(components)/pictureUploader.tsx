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
        setPictureState({cropped: files[0].fileUrl, original: files[0].originalFile.fileUrl});
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
