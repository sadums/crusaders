import { useState } from "react";

interface Like {
    username: string;
    firstname: string;
    lastname: string;
    pfp: string;
    userId: string;
}

function LikeFollowerModal({likes}:Like[]) {

   const [closeModal, setCloseModal] = useState(false)

  return (
    <div className={`fixed z-10 inset-0 duration-200 ease-in-out flex items-center justify-center`}>
      <div
        className="fixed inset-0 bg-black opacity-90 duration-200 transition-all ease-in-out"
        aria-hidden="true"
      ></div>
      <div className="inline-block align-bottom bg-white dark:bg-coolGray rounded-lg overflow-hidden shadow-xl transform transition-all">
        <h1>asdfasdfasdfadsf</h1>
        
      </div>
    </div>
  );
}

export default LikeFollowerModal;
