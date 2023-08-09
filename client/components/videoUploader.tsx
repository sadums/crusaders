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
        console.log(files);
        const videoUrl = files[0].originalFile.fileUrl;
        const thumbnailUrl = videoUrl.replace("/raw/", "/image/");
        console.log(thumbnailUrl);
        setVideoState({ video: videoUrl, thumbnail: thumbnailUrl });
        setIsUploaded(true);
      }}
    >
      {({ onClick }) => (
        <button
          className={
            isUploaded
              ? "dark:bg-green-600 bg-green-500 text-sm hover:bg-green-700 text-black dark:text-white font-semibold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              : "bg-blue-500 hover:bg-blue-600 text-sm text-white font-semibold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          }
          onClick={onClick}
        >
          <div className="flex items-center">
            {isUploaded ? "Video Uploaded" : uploadText}
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

export default VideoUploader;
