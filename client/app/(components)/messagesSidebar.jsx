const MessagesSidebar = ({ props }) => {
  return (
    <div className="messagesSidebarMainDiv z-12">
      {/* <h2>{props.username}'s {props.title}</h2> */}
      <div className="messagesHeader">
        <h3>{props.username}'s Indox:</h3>
      </div>
      <div className="messagesContentDiv">
        {props.content.map((message) => (
          <div className="individualMessages" key={message.message}>
            <p>{message.message}</p>

            <div className="flex flex-shrink-0 items-center justify-end messagesUserPFP">
            <h3>-{message.username}</h3>
              <img
                className="h-9 w-auto rounded-full object-cover"
                src={message.pfp}
                alt="Your Company"
              ></img>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessagesSidebar;
