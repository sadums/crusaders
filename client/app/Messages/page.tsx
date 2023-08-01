"use client";
import "../(styles)/messages.css";
import "../(styles)/homepage.css";

export default function Messages() {

    const tempFriendLinks = [
        {
            username: "Sadums",
            pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpixel.nymag.com%2Fimgs%2Fdaily%2Fintelligencer%2F2019%2F10%2F15%2F15-hunter-biden.w700.h700.jpg&f=1&nofb=1&ipt=875a251388322106d0ff37211cd4197c54ee31a308e9798c16c74fd34e3262fc&ipo=images",
            convo: [
                {
                    speaker: true,
                    message: "Whats good"
                },
                {
                    speaker: true,
                    message: "Idk idk idk, tried to commit repo to github, massive rip, fuck"
                },
                {
                    speaker: false,
                    message: "That sucks ass man"
                },
                {
                    speaker: true,
                    message: "Yeah brother"
                },
            ]
        },
        {
            username: "TitanicYoshi",
            pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.E3v8f0j8uhgRLnAk_2ou7AHaGX%26pid%3DApi&f=1&ipt=a532fbd2d3b278b927f5504a1cdab794f079828da0702c589a23a5a4cddf28f1&ipo=images",
            convo: [
                {
                    speaker: false,
                    message: "I love OceanGate"
                },
                {
                    speaker: true,
                    message: "Me too, lololo lolol olol olo lasdf asd fsd fs dfa sdf asd fasd fas dfa sdfasdfasdfasd fasdfasdfa sdfdsfdsds as dfasdf asdfsdfs dsfdfdsdfa"
                },
                {
                    speaker: false,
                    message: "That sucks ass man"
                },
                {
                    speaker: true,
                    message: "Yeah brother"
                },
            ]
        },
        {
            username: "TitanicYoshi",
            pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.E3v8f0j8uhgRLnAk_2ou7AHaGX%26pid%3DApi&f=1&ipt=a532fbd2d3b278b927f5504a1cdab794f079828da0702c589a23a5a4cddf28f1&ipo=images",
            convo: [
                {
                    speaker: false,
                    message: "I love OceanGate"
                },
                {
                    speaker: true,
                    message: "Me too, lololo lolol olol olo lasdf asd fsd fs dfa sdf asd fasd fas dfa sdfasdfasdfasd fasdfasdfa sdfdsfdsds as dfasdf asdfsdfs dsfdfdsdfa"
                },
                {
                    speaker: false,
                    message: "That sucks ass man"
                },
                {
                    speaker: true,
                    message: "Yeah brother"
                },
            ]
        },
        {
            username: "TitanicYoshi",
            pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2ttZm63g10QST-zUfee9bAHaHa%26pid%3DApi&f=1&ipt=2a2e9a8ed813a72d1e579820ca1d4eedbba93128fafac81acac7c6a220bfee88&ipo=images",
            convo: [
                {
                    speaker: false,
                    message: "I love OceanGate"
                },
                {
                    speaker: true,
                    message: "Me too, lololo lolol olol olo lasdf asd fsd fs dfa sdf asd fasd fas dfa sdfasdfasdfasd fasdfasdfa sdfdsfdsds as dfasdf asdfsdfs dsfdfdsdfa"
                },
                {
                    speaker: false,
                    message: "That sucks ass man"
                },
                {
                    speaker: true,
                    message: "Yeah brother"
                },
            ]
        },
        {
            username: "Xtra",
            pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2ttZm63g10QST-zUfee9bAHaHa%26pid%3DApi&f=1&ipt=2a2e9a8ed813a72d1e579820ca1d4eedbba93128fafac81acac7c6a220bfee88&ipo=images",
            convo: []
        },
        {
            username: "Xtra",
            pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2ttZm63g10QST-zUfee9bAHaHa%26pid%3DApi&f=1&ipt=2a2e9a8ed813a72d1e579820ca1d4eedbba93128fafac81acac7c6a220bfee88&ipo=images",
            convo: []
        },
        {
            username: "Xtra",
            pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2ttZm63g10QST-zUfee9bAHaHa%26pid%3DApi&f=1&ipt=2a2e9a8ed813a72d1e579820ca1d4eedbba93128fafac81acac7c6a220bfee88&ipo=images",
            convo: []
        },
        {
            username: "Xtra",
            pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2ttZm63g10QST-zUfee9bAHaHa%26pid%3DApi&f=1&ipt=2a2e9a8ed813a72d1e579820ca1d4eedbba93128fafac81acac7c6a220bfee88&ipo=images",
            convo: []
        },
        {
            username: "Xtra",
            pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2ttZm63g10QST-zUfee9bAHaHa%26pid%3DApi&f=1&ipt=2a2e9a8ed813a72d1e579820ca1d4eedbba93128fafac81acac7c6a220bfee88&ipo=images",
            convo: []
        },
        {
            username: "Xtra",
            pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2ttZm63g10QST-zUfee9bAHaHa%26pid%3DApi&f=1&ipt=2a2e9a8ed813a72d1e579820ca1d4eedbba93128fafac81acac7c6a220bfee88&ipo=images",
            convo: []
        },
        {
            username: "Xtra",
            pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2ttZm63g10QST-zUfee9bAHaHa%26pid%3DApi&f=1&ipt=2a2e9a8ed813a72d1e579820ca1d4eedbba93128fafac81acac7c6a220bfee88&ipo=images",
            convo: []
        },
        {
            username: "Xtra",
            pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2ttZm63g10QST-zUfee9bAHaHa%26pid%3DApi&f=1&ipt=2a2e9a8ed813a72d1e579820ca1d4eedbba93128fafac81acac7c6a220bfee88&ipo=images",
            convo: []
        },
        {
            username: "Xtra",
            pfp: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2ttZm63g10QST-zUfee9bAHaHa%26pid%3DApi&f=1&ipt=2a2e9a8ed813a72d1e579820ca1d4eedbba93128fafac81acac7c6a220bfee88&ipo=images",
            convo: []
        },
        
    ]

  return (
    <div className="messagesPageMainDiv bg-darkestCoolGray ml-20 h-[100vh]">
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-1 bg-[#131922] border-coolGray border-r-4">
          <div className="bg-darkCoolGray h-[100vh] p-2 secondaryMenuMainDiv"></div>
        </div>
        <div className="col-span-4">

{/* WILL MAKE SPLIDE FOR THIS */}

            <div className="mt-4 flex border-coolGray border-b-2 pb-2">
                {tempFriendLinks.map((friend) => (
                    <a key={friend.username} className="mr-3 overflow-x-hidden cursor-pointer hover:scale-110 duration-150 ease-in-out">
                        <img src={friend.pfp} className="h-20 w-20 rounded-full object-cover border-customPurple border-2"></img>
                    </a>
                ))}
            </div>
            <div className="flex justify-center w-[60%] ml-[20%] h-[100%] border-coolGray border-r-2 border-l-2">
                
            </div>
        </div>
      </div>
    </div>
  );
}
