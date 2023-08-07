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
                    <div className="max-w-[60%]">
                      <h1 className="border-2 border-blue-600 rounded-2xl p-1 bg-blue-300 text-black text-sm font-semibold">
                        {text.message}
                      </h1>
                      <div className="flex justify-end mt-1">
                        <h1 className="text-xs text-gray-500">
                          8:01 PM, 08/01/2023
                        </h1>
                      </div>
                    </div>
                  </div>
                );
              }
              if (text.speaker === false) {
                return (
                    <div key={index} className="flex justify-start mt-2">
                    <div className="max-w-[60%]">
                      <h1 className="border-2 border-green-600 rounded-2xl p-1 bg-green-300 text-black text-sm font-semibold">
                        {text.message}
                      </h1>
                      <div className="flex justify-start mt-1">
                        <h1 className="text-xs text-gray-500">
                          8:01 PM, 08/01/2023
                        </h1>
                      </div>
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
