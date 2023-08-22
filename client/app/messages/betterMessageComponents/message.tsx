export default function Message({
  body,
  pfp,
  date,
  username,
  who,
}: {
  body: string;
  pfp: string;
  date: string;
  username: string;
  who: boolean;
}) {
  if (who) {
    // your message
    return (
      <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
        <div>
          <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
            <p className="text-sm">{body}</p>
          </div>
          <span className="text-xs text-gray-500 leading-none">{`${username} - ${date}`}</span>
        </div>
        <img
          src={pfp}
          className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"
        ></img>
      </div>
    );
  } else {
    // their message
    return (
      <div className="flex w-full mt-2 space-x-3 max-w-xs">
        <img
          src={pfp}
          className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"
        ></img>
        <div>
          <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
            <p className="text-sm">{body}</p>
          </div>
          <span className="text-xs text-gray-500 leading-none">{`${username} - ${date}`}</span>
        </div>
      </div>
    );
  }
}
