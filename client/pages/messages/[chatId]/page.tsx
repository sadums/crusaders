

export default function Page({ params }: { params: { chatId: string } }) {
  // <Conversations
  //   pfp={
  //     "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2ttZm63g10QST-zUfee9bAHaHa%26pid%3DApi&f=1&ipt=2a2e9a8ed813a72d1e579820ca1d4eedbba93128fafac81acac7c6a220bfee88&ipo=images"
  //   }
  //   user={user}
  //   convo={userConvo}
  // />;
  return (<div>My Post: {params.chatId}</div>)
}
