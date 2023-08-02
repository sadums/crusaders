interface Convo {
  speaker: boolean;
  message: string;
}

function Conversations({ user, convo }: { user: String; convo: Convo[] }) {
  const buildConversation = () => {
    if (user === "Nobody") {
      return <h1>No user selected</h1>;
    }
    if (!convo[0]) {
      return <h1>You have no messages with this user</h1>;
    } else {
      return (
        <>
          <h1 className="flex justify-center mb-8">{user}</h1>
          <div className="w-[100%] mt-8 p-2">
            {convo.map((text, index) => {
              if (text.speaker === true) {
                return (
                  <div key={index} className="flex justify-end mt-2">
                    <div className="border-2 border-blue-600 rounded-2xl p-1 max-w-[60%] bg-blue-300">
                      <h1 className="text-black text-sm font-semibold">
                        {text.message}
                      </h1>
                    </div>
                  </div>
                );
              }
              if (text.speaker === false) {
                return (
                  <div key={index} className="flex justify-start mt-2">
                    <div className="border-2 border-green-600 rounded-2xl p-1 max-w-[60%] bg-green-300">
                      <h1 className="text-black font-semibold text-sm">
                        {text.message}
                      </h1>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </>
      );
    }
  };

  return <>{buildConversation()}</>;
}

export default Conversations;
