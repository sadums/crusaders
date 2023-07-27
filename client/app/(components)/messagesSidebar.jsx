

const MessagesSidebar = ({ props }) => {
  return (
    <div className="messagesSidebarMainDiv z-12">
      <h2>{props.username}'s {props.title}</h2>
    </div>
  );
};

export default MessagesSidebar;