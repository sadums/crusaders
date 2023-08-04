import { Uploader } from "uploader"; // Do I even need 
import { UploadButton } from "react-uploader";
import { useState } from "react";

interface VideoUploaderProps {
    videoState: { video: string; thumbnail: string };
    setVideoState: (state: { video: string; thumbnail: string }) => void;
    uploadText: string;
  }

  interface FileObject {
    originalFile: {
      fileUrl: string;
    };
    fileUrl: string;
  }
  

function VideoUploader({
    videoState,
    setVideoState,
    uploadText,
  }: VideoUploaderProps) {
    const uploader = Uploader({ apiKey: "public_FW25bUsEgLaLmifCsyAEZMAxaX9j" });
  
    const [isUploaded, setIsUploaded] = useState(false);
  
    return (
      <UploadButton
        uploader={uploader}
        options={{
          multi: false,
          editor: {
            // @ts-ignore
            videos: {
              // Video-specific options here
            },
          },
        }}
        onComplete={(files: FileObject[]) => {
            console.log(files)
          const videoUrl = files[0].originalFile.fileUrl;
          const thumbnailUrl = videoUrl.replace('/raw/', '/image/');
          console.log(thumbnailUrl)
          setVideoState({ video: videoUrl, thumbnail: thumbnailUrl });
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
            {isUploaded ? "Video uploaded" : uploadText}
          </button>
        )}
      </UploadButton>
    );
  }
  
  export default VideoUploader;
  