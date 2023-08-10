"use client"

interface ModalProps {
  username: string;
  firstname: string;
  lastname: string;
  pfp: string;
  id: string;
}

function HomeSearchUserResult({ username, firstname, lastname, pfp, id }: ModalProps) {
  console.log(pfp);
  return (
    <div className="align-center mt-2 shadow-xl dark:shadow-notificationShadowPink rounded-lg cursor-pointer bg-white dark:bg-darkModeDarkGray p-1 duration-150 ease-in-out scale-100 hover:scale-95" onClick={() => location.href = `/profile/${id}`}>
      <div className="flex">
        <a className="cursor-pointer">
          <img
            src={pfp}
            className="h-12 w-12 rounded-full object-cover border-customPurple border-2"
          ></img>
        </a>
        <div className="items-center  align-center h-full">
          <h2 className="text-md cursor-pointer text-black font-semibold dark:text-white ml-1">
            {`${firstname} ${lastname}`}
          </h2>
          <div>
            <a
              href="#"
              className="text-gray-500 cursor-pointer text-sm ml-1 py-2"
              aria-current="page"
            >
              @{username}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSearchUserResult;