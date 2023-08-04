"use client";

import "../(styles)/homepage.css";
import FeedPosts from "./feedPosts";
import ToggleSidebar from "./toggleSidebar";
import MessagesSidebar from "./messagesSidebar";
import Sidebar from "./sidebar";
import { useState, useRef, ChangeEvent, MouseEventHandler } from "react";
import PictureUploader from "./pictureUploader";
import { ADD_POST } from "../(GraphQL)/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../(utils)/auth";
import VideoUploader from "./videoUploader";

function HomeController() {
  // For fake posts
  const tempUsers = [
    {
      username: "Carreejoh",
      profilePic:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.abcnews.com%2Fimages%2FNightline%2F191018_ntl_hunter_biden_1_1239_hpMain_1x1_992.jpg&f=1&nofb=1&ipt=622f05d73b64dcad7acc99165e37727bc9ee27c841f790f83f7628673c9df3d4&ipo=images",
      postTitle: "First post fuck yes",
      postDesc: "This post is bs idk idk idk idk",
      postImg:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.MwnKEzDKkbVbT-7aPzgwMQHaEK%26pid%3DApi&f=1&ipt=6f063d2735073ac485932a221f0f12dcb0537273747034db597b4a1436340a45&ipo=images",
      date: "07/24/2023",
    },
    {
      username: "JohnDoe",
      profilePic:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.abcnews.com%2Fimages%2FNightline%2F191018_ntl_hunter_biden_1_1239_hpMain_1x1_992.jpg&f=1&nofb=1&ipt=622f05d73b64dcad7acc99165e37727bc9ee27c841f790f83f7628673c9df3d4&ipo=images",
      postTitle: "Exciting Adventure",
      postDesc: "Just had an amazing adventure with friends. It was thrilling!",
      postImg:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.MtVUkuoD2DQf6eJYWLDnYwHaDq%26pid%3DApi&f=1&ipt=9a7334483977c2c85bf5bf1492a5fd3de01bb8f8e8ac17e1bd8241db9c1b376b&ipo=images",
      date: "07/25/2023",
    },
    {
      username: "EmilySmith",
      profilePic:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.abcnews.com%2Fimages%2FNightline%2F191018_ntl_hunter_biden_1_1239_hpMain_1x1_992.jpg&f=1&nofb=1&ipt=622f05d73b64dcad7acc99165e37727bc9ee27c841f790f83f7628673c9df3d4&ipo=images",
      postTitle: "Delicious Food",
      postDesc:
        "Tried out a new restaurant today. The food was absolutely delicious!",
      postImg:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.R_s3pH6bLBzCRLQWtFgy8gHaEr%26pid%3DApi&f=1&ipt=0760a9256a1e41d30d118b516efb1e41e60f4cf667589341f2b24a8c685536df&ipo=images",
      date: "07/26/2023",
    },
    {
      username: "TravelBug",
      profilePic:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.abcnews.com%2Fimages%2FNightline%2F191018_ntl_hunter_biden_1_1239_hpMain_1x1_992.jpg&f=1&nofb=1&ipt=622f05d73b64dcad7acc99165e37727bc9ee27c841f790f83f7628673c9df3d4&ipo=images",
      postTitle: "Wanderlust",
      postDesc:
        "In love with this beautiful scenic view. Can't get enough of traveling! I love Mexico, Salt Lake, Snwoboaridng, skiing, riding bikes, eating stuff, doing other things, writing code",
      postImg:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.R_s3pH6bLBzCRLQWtFgy8gHaEr%26pid%3DApi&f=1&ipt=0760a9256a1e41d30d118b516efb1e41e60f4cf667589341f2b24a8c685536df&ipo=images",
      date: "07/27/2023",
    },
    {
      username: "Carreejoh",
      profilePic:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.abcnews.com%2Fimages%2FNightline%2F191018_ntl_hunter_biden_1_1239_hpMain_1x1_992.jpg&f=1&nofb=1&ipt=622f05d73b64dcad7acc99165e37727bc9ee27c841f790f83f7628673c9df3d4&ipo=images",
      postTitle: "First post fuck yes",
      postDesc: "This post is bs idk idk idk idk",
      postImg:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.MwnKEzDKkbVbT-7aPzgwMQHaEK%26pid%3DApi&f=1&ipt=6f063d2735073ac485932a221f0f12dcb0537273747034db597b4a1436340a45&ipo=images",
      date: "07/24/2023",
    },
  ];

  const [addPostMutation, { loading, error, data }] = useMutation(ADD_POST);

  const [createPostDiv, showCreatePostDiv] = useState(false);
  const [hashtags, addHashtags] = useState<string[]>([]);
  const [pictureState, setPictureState] = useState<{
    cropped: string;
    original: string;
  }>({
    cropped: "",
    original: "",
  });

  const [videoState, setVideoState] = useState<{
    thumbnail: string;
    video: string;
  }>({
    thumbnail: "",
    video: "",
  });

  const inputRef = useRef<HTMLInputElement>(null);

  const handleHashtagAddition = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    // Ensure the inputRef is current and has a value property
    if (inputRef.current && inputRef.current.value) {
      const newHashtag = inputRef.current.value;
      addHashtags((prev) => [...prev, newHashtag]);
      inputRef.current.value = "";
    }
  };

  const createPostHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const target = event.target as HTMLFormElement;
      type HashtagInput = {
        hashtagText: string;
      };

      const inputHashtags: HashtagInput[] = [];
      //const hashtags: string[] = ["newpost", "graphql"]; // Example hashtags

      hashtags.forEach((tag) => {
        inputHashtags.push({ hashtagText: tag });
      });

      console.log(inputHashtags);
      const postInput = {
        preview: pictureState.cropped, //We need something to dif the pics from the videos
        media: pictureState.original,
        title: target.form[1].value,
        body: target.form[2].value,
        hashtags: inputHashtags,
      };
      console.log(postInput);
      const id = Auth.getProfile().data._id;
      const response = await addPostMutation({
        variables: {
          input: postInput,
          userId: id,
        },
      });
      console.log(response);
      console.log(response);
      //Connect to backend
    } catch (err) {
      console.error(err);
    }
  };

  const handleSetPictureState = (url: { cropped: string; original: string }): void => {
    setPictureState(url);
  };

  return (
    <div className="homePageMainDiv dark:bg-white bg-darkestCoolGray ml-20">
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-1 bg-[#131922]">
          <div className="bg-darkCoolGray h-[100%] p-2 pt-20 secondaryMenuMainDiv"></div>
        </div>
        <div className="col-span-3 pl-64">
          <div className="homePageFeedMainDiv border-customPurple border-r-[1px] border-l-[1px]">
            <div className="feedPostsTop"></div>
            <FeedPosts users={tempUsers} />
          </div>
        </div>

        <div className="col-span-2">
          <div className="homepageInfoMainDiv">
            {/* <input
              type="text"
              placeholder="Search Crusaders..."
              className="px-4 py-2 h-8 rounded-lg focus:outline-none navBarSearchBar"
            /> */}
            <div
              className={` ease-in-out duration-300 ${
                createPostDiv
                  ? "w-[90%] border-[1px] border-customPurple rounded-xl p-2"
                  : "w-[50%]"
              }`}
            >
              <button
                onClick={() => {
                  showCreatePostDiv(!createPostDiv);
                }}
                className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 hover:scale-105 ${
                  createPostDiv ? "hidden" : "block"
                }`}
              >
                Create A Post
              </button>

              <div
                className={`relative ml-0 ${
                  createPostDiv ? "block" : "hidden"
                }`}
              >
                <form>
                  <div className="">
                    <button
                      className={`absolute top-0 right-0 z-50 ${
                        createPostDiv ? "scale-100" : "scale-0"
                      }`}
                      onClick={() => {
                        showCreatePostDiv(!createPostDiv);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                    <h3>Create Your Own Post</h3>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-sm text-neonBlue">Post Title:</h2>
                    <input
                      type="text"
                      id=""
                      placeholder="Title"
                      className="text-white bg-transparent border-solid border-neonBlue border-t-0 border-r-0 border-l-0 border-b-2 outline-none w-[100%]"
                    ></input>
                  </div>
                  <div className="mt-4">
                    <h2 className="text-sm text-neonBlue">Description:</h2>
                    <textarea
                      placeholder="Description, 400 max chars"
                      className="bg-transparent border-solid border-neonBlue border-t-0 border-r-0 border-l-0 border-b-2 outline-none w-[100%] h-20"
                    ></textarea>
                  </div>
                  <div className="mt-4">
                    <h2 className="text-sm text-neonBlue">Media:</h2>
                    <PictureUploader
                      pictureState={pictureState}
                      setPictureState={handleSetPictureState}
                      uploadText={"Select your media"}
                    />
                    <VideoUploader
                      uploadText={"Upload a video"}
                      videoState={videoState}
                      setVideoState={setVideoState}
                    />
                  </div>
                  <div className="mt-4">
                    <h2 className="text-sm text-neonBlue">Hashtags:</h2>
                    <div className="flex">
                      {hashtags.map((tag, index) => (
                        <div key={index}>
                          <h4>#{tag}</h4>
                        </div>
                      ))}
                    </div>
                    <input
                      type="text"
                      ref={inputRef}
                      id=""
                      placeholder="Hashtag"
                      className="text-white mt-2 bg-transparent border-solid border-neonBlue border-t-0 border-r-0 border-l-0 border-b-2 outline-none w-[20%]"
                    ></input>
                    <button
                      type="button"
                      className="pl-2 border-neonBlue border-t-0 border-r-0 border-l-0 border-b-2 hover:text-neonBlue ease-in-out transition duration-100"
                      // This error is annoying but doesn't change functionality
                      onClick={handleHashtagAddition}
                    >
                      Add
                    </button>
                  </div>
                  <button
                    onClick={createPostHandler}
                    className="pl-2 border-neonBlue border-t-0 border-r-0 border-l-0 border-b-2 hover:text-neonBlue ease-in-out transition duration-100"
                    type="submit"
                  >
                    Create
                  </button>
                </form>
              </div>
            </div>
            <div
              className={`border-[1px] shadow-notificationShadowPink border-customPurple bg-coolGray rounded-xl p-2 mt-3 w-[50%]`}
            >
              <h3>Go Pro!</h3>
              <p>Get a one month free trial idk</p>
              <button className=" px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 hover:scale-105">
                Sign up
              </button>
            </div>
            <div className="border-[1px] border-customPurple shadow-notificationShadowPink bg-coolGray rounded-xl p-2 mt-3 w-[50%]">
              <h3>Who To Follow</h3>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-7 w-auto rounded-full object-cover"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.kjCUP06WDUMR88i5wo2SqwAAAA%26pid%3DApi&f=1&ipt=f48cf9d9981fe4a656c956f9fb581cad8c3919212d8b2805255465420fcda332&ipo=images"
                    alt="Your Company"
                  ></img>
                </div>
                <div className="hidden sm:ml-0 sm:flex sm:items-center sm:justify-center">
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-black-800 px-3 py-2"
                      aria-current="page"
                    >
                      Carreejoh
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-7 w-auto rounded-full object-cover"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.kjCUP06WDUMR88i5wo2SqwAAAA%26pid%3DApi&f=1&ipt=f48cf9d9981fe4a656c956f9fb581cad8c3919212d8b2805255465420fcda332&ipo=images"
                    alt="Your Company"
                  ></img>
                </div>
                <div className="hidden sm:ml-0 sm:flex sm:items-center sm:justify-center">
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-black-800 px-3 py-2"
                      aria-current="page"
                    >
                      EmilySmith
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="homepageInfoDivs">
              <h3>Your Interests</h3> */}
            <form className="max-w-sm mt-3 border-[1px] shadow-notificationShadowPink bg-coolGray border-customPurple rounded-xl p-2 w-[50%]">
              <div className="mb-2">
                <h3>Follow Hashtags</h3>
                <div className="flex items-center flex-wrap infoInterestsDiv">
                  <label id="interest1" className="ml-2 text-neonBlue">
                    Travel
                  </label>
                  <input
                    type="checkbox"
                    id="interest1"
                    name="interest1"
                    className="form-checkbox ml-2 h-4 w-4 text-blue-500"
                  ></input>
                  <label id="interest1" className="ml-2 text-neonBlue">
                    News
                  </label>
                  <input
                    type="checkbox"
                    id="interest1"
                    name="interest1"
                    className="form-checkbox ml-2 h-4 w-4 text-blue-500"
                  ></input>
                </div>
                <div className="flex items-center flex-wrap infoInterestsDiv">
                  <label id="interest1" className="ml-2 text-neonBlue">
                    Coding
                  </label>
                  <input
                    type="checkbox"
                    id="interest1"
                    name="interest1"
                    className="form-checkbox ml-2 h-4 w-4 text-blue-500"
                  ></input>
                  <label id="interest1" className="ml-2 text-neonBlue">
                    Sports
                  </label>
                  <input
                    type="checkbox"
                    id="interest1"
                    name="interest1"
                    className="form-checkbox ml-2 h-4 w-4 text-blue-500"
                  ></input>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeController;
