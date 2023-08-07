import { useState } from "react";

interface ModalProps {
  users: User[];
  handleClose: () => void;
}

interface User {
  username: string;
  firstName: string;
  lastName: string;
  pfp: string;
}

const LikeFollowerModal: React.FC<ModalProps> = ({ handleClose, users }) => {
  //   const [closeModal, setCloseModal] = useState(false);
  console.log(users);
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto duration-200 ease-in-out flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black opacity-90 duration-200 transition-all ease-in-out"
        aria-hidden="true"
      ></div>
      <div className="inline-block align-bottom bg-white dark:bg-coolGray rounded-lg overflow-hidden shadow-xl transform transition-all">
        <div className="w-[24vw]">
          <div className="flex justify-between border-black pb-2 border-b-[2px] p-2">
            <h1 className="text-black text-center text-lg font-semibold dark:text-white">
              Likes
            </h1>
            <button
              onClick={handleClose}
              className="ml-auto bg-transparent border-0 dark:text-white text-black"
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
          </div>
          <div className="p-2 overflow-y-scroll max-h-[36vh]">
            {users.map((user, index) => (
              <div
                className="flex justify-between border-gray-700 border-b-[1px]"
                key={index}
              >
                <div className="flex items-center ">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src={user.pfp}
                    alt="Your Company"
                  ></img>
                  <div className="flex flex-col">
                    <h4 className="text-black text-md ml-1 dark:text-white">
                      {user.firstName} {user.lastName}
                    </h4>
                    <a
                      href="#"
                      className="text-gray-500 text-md ml-1"
                      aria-current="page"
                    >
                      @{user.username}
                    </a>
                  </div>
                </div>
                <div className="my-auto">
                  <button className=" font-semibold  text-neonBlue p-[1px] pl-2 pr-2 rounded-md">
                    Follow
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    // <div
    //   className={`${
    //     closeModal ? "hidden scale-0" : "block scale-100"
    //   }fixed z-20 overflow-y-auto inset-0 duration-200 ease-in-out flex items-center justify-center`}
    // >
    //   <div
    //     className="inset-0 fixed z-10 bg-black opacity-90 duration-200 transition-all  ease-in-out"
    //     aria-hidden="true"
    //   ></div>
    //   <div className="inline-block z-20 align-bottom bg-white dark:bg-coolGray rounded-lg items-center justify-center overflow-hidden shadow-xl transform transition-all">
    //     <div className="p-2">
    //     <div className="flex justify-between border-gray-700 pb-2 border-b-[1px]">
    //           <div className="flex items-center">
    //             <img
    //               className="h-10 w-10 rounded-full object-cover"
    //               src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.s__coU_NozvbjdTfl1ybNgHaEo%26pid%3DApi&f=1&ipt=dd5c31b186f062eacf4e9cf3f1a9b823fb0e9302f51f85bc6530c68952c83d29&ipo=images"
    //               alt="Your Company"
    //             ></img>
    //             <div className="flex flex-col">
    //               <h4 className="text-black text-lg ml-1 dark:text-white">Hello</h4>
    //               <a
    //                 href="#"
    //                 className="text-gray-500 text-md ml-1"
    //                 aria-current="page"
    //               >
    //                 @Carreejoh
    //               </a>
    //             </div>
    //           </div>

    //           <button
    //             onClick={() => setCloseModal(!closeModal)}
    //             className="ml-auto bg-transparent border-0 dark:text-white text-black"
    //           >
    //             <span className="sr-only">Close</span>
    //             <svg
    //               className="h-6 w-6"
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //               aria-hidden="true"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth="2"
    //                 d="M6 18L18 6M6 6l12 12"
    //               />
    //             </svg>
    //           </button>
    //         </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default LikeFollowerModal;
