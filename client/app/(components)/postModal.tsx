"use client"
import React, { useState} from "react";

interface ModalProps {
  title: string;
  image: string;
  body: string;
  date: string;
  comments: string[];
  hashtags: string[];
  username: string;
  handleClose: () => void;
}

const PostModal: React.FC<ModalProps> = ({
  title,
  image,
  body,
  date,
  comments,
  hashtags,
  username,
  handleClose,
}) => {
    const [showComments, setShowComments] = useState(false)
  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-black opacity-80"
          aria-hidden="true"
        ></div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <button
                onClick={handleClose}
                className="ml-auto bg-transparent border-0 text-gray-900 hover:text-gray-600"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="mt-3 text-center sm:mt-0 sm:text-left">
                <div className="flex items-center">
                  <p className="text-lg leading-6 font-medium text-gray-900 mr-2">
                    {username}
                  </p>
                  <p className="text-sm text-gray-500">{date}</p>
                </div>
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  {title}
                </h3>
                <img
                  src={image}
                  alt="Post thumbnail"
                  className="w-full h-48 object-cover mt-2"
                />
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{body}</p>
                </div>
                <div className="mt-2 flex">
                  <button className="mr-2 text-blue-500 hover:text-blue-700">
                    Like
                  </button>
                  <button className="text-blue-500 hover:text-blue-700">
                    Share
                  </button>
                </div>
                <div className="mt-2">
                  {hashtags.map((tag, index) => (
                    <span key={index} className="text-blue-500 mr-2">
                      #{tag}
                    </span>
                  ))}
                </div>


                <button
                  onClick={() => setShowComments((prev) => !prev)}
                  className="mt-2 text-blue-500 hover:text-blue-700"
                >
                  {showComments ? "Hide Comments" : "Show Comments"}
                </button>
                {showComments && (
                  <div className="mt-2">
                    <h4 className='text-black'>TEST COMMENT</h4>
                    {comments.map((comment, index) => (
                      <p key={index} className="text-sm text-gray-500">
                        {comment}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
