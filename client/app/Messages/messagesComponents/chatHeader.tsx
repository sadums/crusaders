
interface Header {
    type: string;
    pfp: string;
    username: string;
    firstname: string;
    lastname: string;
}

function ChatHeader({type, pfp, username, firstname, lastname}: Header) {
    return(
        <div className="bg-darkestWhite bg-opacity-80 dark:bg-darkModeDarkGray dark:bg-opacity-80">

        </div>
    )
}

export default ChatHeader;