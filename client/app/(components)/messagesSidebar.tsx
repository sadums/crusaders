interface messages {
  props: {
    content: {
      username: string;
      pfp: string;
    }[];
    title: string;
    username: string;
  };
}

const MessagesSidebar = ({ props }:messages) => {
  // setTimeout(() => {
  //   return (
  //     <div className="messagesSidebarMainDiv z-12">
  //       {/* <h2>{props.username}'s {props.title}</h2> */}
  //       <div className="messagesHeader">
  //         <h3>{props.username}'s Indox:</h3>
  //       </div>
  //       <div className="messagesContentDiv">
  //         {props.content.map((message) => (
  //           <div className="individualMessages" key={message.message}>
  //             <p>{message.message}</p>

  //             <div className="flex flex-shrink-0 items-center justify-end messagesUserPFP">
  //             <h3>-{message.username}</h3>
  //               <img
  //                 className="h-9 w-auto rounded-full object-cover"
  //                 src={message.pfp}
  //                 alt="Your Company"
  //               ></img>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // }, 300);

  return (
    <div className="messagesSidebarMainDiv z-12">
      {/* <h2>{props.username}'s {props.title}</h2> */}
      <div>
        <h3>{props.username}'s Inbox:</h3>
      </div>
      <div className="messagesContentDiv">
        {props.content.map((message:any, index) => (
          <div className="individualMessages shadow-xl" key={index}>
            <p>{message.message}</p>
  
            <div className="flex flex-shrink-0 items-center justify-end messagesUserPFP">
              <h3>-{message.username}</h3>
              <img
                className="h-9 w-auto rounded-full object-cover"
                src={message.pfp}
                alt="Your Company"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessagesSidebar;
