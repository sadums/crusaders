"use client";

import "../(styles)/homepage.css";
import FeedPosts from "./feedPosts";
import ToggleSidebar from "./toggleSidebar";
import MessagesSidebar from "./messagesSidebar";
import Sidebar from "./sidebar";
import {
  useState,
  useRef,
  ChangeEvent,
  MouseEventHandler,
  useEffect,
} from "react";
import PictureUploader from "./pictureUploader";
import { ADD_POST } from "../(GraphQL)/mutations";
import { useMutation, useQuery, useLazyQuery } from "@apollo/client";
import { GET_ALL_USERS, GET_POST, GET_USER_BY_ID } from "../(GraphQL)/queries";
import Auth from "../(utils)/auth";
import VideoUploader from "./videoUploader";
import PostModal from "./postModal";
import LikeFollowerModal from "./likeFollowerFollowingModal";

function HomeController() {
  type PostData = {
    title: string;
    body: string;
    comments: any[]; // Adjust this type as needed
    likes: any[];
    createdAt: string;
    hashtags: any[]; // Adjust this type as needed
    preview: string;
    media: string;
    username: string;
    firstName: string;
    lastName: string;
    pfp: string;
    _id: string;
  };

  const [
    getUserById,
    {
      loading: singleUserLoading,
      error: singleUserError,
      data: singleUserData,
    },
  ] = useLazyQuery(GET_USER_BY_ID, {
    variables: { id: "" }, // Initialize with an empty string
  });
  //console.log(singleUserData.getUserById)

  const [addPostMutation, { loading: loading, error: error, data: data }] =
    useMutation(ADD_POST);
  // const [
  //   getUsers,
  //   { loading: getUsersLoading, error: getUsersError, data: getUsersData },
  // ] = useLazyQuery(GET_ALL_USERS);

  const {
    loading: getUsersLoading,
    error: getUsersError,
    data: getUsersData,
  } = useQuery(GET_ALL_USERS);
  const [getPost, { loading: postLoading, data: postData }] =
    useLazyQuery(GET_POST);

  const [createPostDiv, showCreatePostDiv] = useState(false);
  const [showModalState, setShowModalState] = useState(false);
  const [showLikeModalState, setShowLikeModalState] = useState(false);
  const [whoToFollowState, setWhoToFollow] = useState();
  const [activePostData, setActivePostData] = useState<PostData | null>(null);
  const [feedPostState, setFeedPostState] = useState([]);
  const [likeModalDataState, setLikeModalDataState] = useState();
  const [uploadTypeState, setUploadTypeState] = useState("");
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

  const likeClickHandler = (postLikes: any) => {
    console.log(postLikes);
    if (postLikes.length) {
      setLikeModalDataState(postLikes);
      setShowLikeModalState(true);
    } else {
      alert(`Post doesn't have any likes`);
    }
  };
  const [createPostCheck, setCreatePostCheck] = useState<boolean>(false);
  //Change this to work
  const postClickHandler = async (postInfo: any) => {
    // console.log(data.getUserById)
    const response = await getPost({ variables: { postId: postInfo.postId } });
    let post: PostData | null = response.data.getPost;

    post = {
      ...post,
      username: postInfo.username,
      firstName: postInfo.firstName,
      lastName: postInfo.lastName,
      pfp: postInfo.pfp,
    };
    console.log(post);
    setActivePostData(post);
    setShowModalState(true);
  };

  // username={data.getUserById.username}
  // pfp={data.getUserById.pfp}
  // firstName={data.getUserById.firstName}
  // lastName={data.getUserById.lastName}

  const createPostHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setCreatePostCheck(!createPostCheck);
    try {
      const target = event.target as HTMLFormElement;
      type HashtagInput = {
        hashtagText: string;
      };
      const inputHashtags: HashtagInput[] = [];
      hashtags.forEach((tag) => {
        inputHashtags.push({ hashtagText: tag });
      });
      const postInput = {
        preview: "",
        media: "",
        title: target.form[1].value,
        body: target.form[2].value,
        hashtags: inputHashtags,
      };

      if (uploadTypeState === "picture") {
        postInput.preview = pictureState.cropped;
        postInput.media = pictureState.original;
      }

      if (uploadTypeState === "video") {
        postInput.preview = videoState.thumbnail;
        postInput.media = videoState.video;
      }
      console.log(postInput);
      if(postInput.title && postInput.preview && postInput.media && postInput.body){
        const id = Auth.getProfile().data._id;
      const response = await addPostMutation({
        variables: {
          input: postInput,
          userId: id,
        },
      });
      console.log(response);
      }else{
        alert('Please fill out all fields')
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSetPictureState = (url: {
    cropped: string;
    original: string;
  }): void => {
    setPictureState(url);
  };

  const pictureButtonHandler = () => {
    setUploadTypeState("picture");
  };

  const videoButtonHandler = () => {
    setUploadTypeState("video");
  };

  // This needs a differnt modal or something, with the preview image
  // const likeCounterClickHandler = () => {
  //   if (singleUserData.getUserById.likes) {
  //     setLikeModalDataState(singleUserData.getUserById.likes);
  //     setShowLikeModalState(true);
  //   } else {
  //     alert(`You have no posts liked`);
  //   }
  // };

  const formatPosts = async (usersArray: any) => {
    try {
      const changedPostData: {
        username: any;
        firstName: any;
        lastName: any;
        pfp: any;
        userId: any;
        postBody: any;
        postTitle: any;
        postPreview: any;
        postComments: any;
        postDate: any;
        postHashtags: any;
        postId: any;
      }[] = [];
      console.log(usersArray);
      await usersArray.forEach(
        (
          user: {
            posts: any[];
            username: any;
            firstName: any;
            lastName: any;
            pfp: any;
            _id: any;
          },
          parIndex: any
        ) => {
          user.posts.forEach(
            (
              post: {
                body: any;
                title: any;
                preview: any;
                comments: any;
                likes: any;
                createdAt: any;
                hashtags: any;
                _id: any;
              },
              index: any
            ) => {
              const displayPostData = {
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                pfp: user.pfp,
                userId: user._id,
                postBody: post.body,
                postTitle: post.title,
                postPreview: post.preview,
                postComments: post.comments,
                postLikes: post.likes,
                postDate: post.createdAt,
                postHashtags: post.hashtags,
                postId: post._id,
              };

              changedPostData.push(displayPostData);
            }
          );
        }
      );
      changedPostData.sort((a, b) => Number(b.postDate) - Number(a.postDate));
      return changedPostData;
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    console.log(getUsersData);
    const setPostsAndFollowers = async () => {
      if (getUsersData && getUsersData.getAllUsers) {
        console.log(getUsersData);
        const newPostData = await formatPosts(getUsersData.getAllUsers);
        console.log(newPostData);
        const usernameArray = getUsersData.getAllUsers.map(
          (user: { username: any }, index: any) => {
            return user.username;
          }
        );
        setWhoToFollow(usernameArray);

        if (newPostData === undefined) {
          // If newPostData is undefined, set it to an empty array
          setFeedPostState([]);
          console.error("POST STATE IS UNDEFINED");
        } else {
          // If newPostData is not undefined, set the state with it
          setFeedPostState(newPostData);
        }
      }
    };

    if (getUsersData) {
      // If getUsersData is defined, call setPostsAndFollowers
      setPostsAndFollowers();
    }
  }, [getUsersData]); // This effect will run whenever getUsersData changes

  useEffect(() => {
    if (Auth.loggedIn()) {
      const id = Auth.getProfile().data._id;
      getUserById({ variables: { id } }); // Call getUserById inside the useEffect with the correct variables
    }
  }, []);

  return (
    // Original Background bg-gradient-to-tr from-lightestWhite via-slate-300 to-lightestWhite
    <div className="homePageMainDiv bg-gradient-to-tr from-mediumWhite via-mediumWhite to-mediumWhite dark:from-darkModeDarkGray dark:to-darkModeDarkGray ml-20">
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-1 bg-mainBlue border-customPurpleDark border-r-[2px] dark:border-0 dark:bg-mainPurple">
          <div className="bg-darkestWhite  dark:bg-darkModeMediumGray h-[100%] p-2 pt-20 secondaryMenuMainDiv"></div>
        </div>
        <div className="col-span-3 pl-40">
          <div className="homePageFeedMainDiv bg- pl-2 pr-2 border-customPurpleDark dark:border-customPurple">
            <div className="feedPostsTop"></div>
            {feedPostState ? (
              <FeedPosts
                posts={feedPostState}
                postClickHandler={postClickHandler}
                likeClickHandler={likeClickHandler}
              />
            ) : null}
          </div>
        </div>

        {Auth.loggedIn() && (
          <div className="col-span-2 mt-4">
            <div className="homepageInfoMainDiv">
              {/* <input
              type="text"
              placeholder="Search Crusaders..."
              className="px-4 py-2 h-8 rounded-lg focus:outline-none navBarSearchBar"
            /> */}
              <div
                className={` ease-in-out duration-300 ${
                  createPostDiv
                    ? "w-[90%]  bg-white dark:bg-coolGray rounded-xl dark:shadow-notificationShadowPink shadow-xl p-2"
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
                        className={`absolute top-0 right-0 z-50 dark:text-white text-black ${
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
                    </div>
                    <div className="">
                      <h2 className="text-sm text-neonBlue font-semibold">
                        Post Title:
                      </h2>
                      <input
                        type="text"
                        id=""
                        placeholder="Title"
                        className="dark:text-white text-black bg-transparent border-solid border-neonBlue border-t-0 border-r-0 border-l-0 border-b-2 outline-none w-[100%]"
                      ></input>
                    </div>
                    <div className="mt-4">
                      <h2 className="text-sm font-semibold text-neonBlue">
                        Description:
                      </h2>
                      <textarea
                        placeholder="Description, 400 max chars"
                        className="bg-transparent border-solid border-neonBlue border-t-0 border-r-0 border-l-0 border-b-2 outline-none w-[100%] h-20 max-h-20 dark:text-white text-black"
                      ></textarea>
                    </div>
                    <div className="mt-4 border-neonBlue border-t-0 border-r-0 border-l-0 border-b-2 pb-1">
                      <h2 className="text-sm font-semibold text-neonBlue">
                        Media:
                      </h2>
                      <div className="flex">
                        <div onClick={pictureButtonHandler}>
                          {uploadTypeState !== "video" && (
                            <PictureUploader
                              pictureState={pictureState}
                              setPictureState={handleSetPictureState}
                              uploadText={"Upload Picture"}
                            />
                          )}
                        </div>
                        <div onClick={videoButtonHandler}>
                          {uploadTypeState !== "picture" && (
                            <VideoUploader
                              uploadText={"Upload Video"}
                              videoState={videoState}
                              setVideoState={setVideoState}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <h2 className="text-sm font-semibold text-neonBlue">
                        Hashtags:
                      </h2>
                      <div className="flex">
                        {hashtags.map((tag, index) => (
                          <div key={index}>
                            <h4 className="dark:text-white text-black mr-1">
                              #{tag}
                            </h4>
                          </div>
                        ))}
                      </div>
                      <input
                        type="text"
                        ref={inputRef}
                        id=""
                        placeholder="Hashtag"
                        className="dark:text-white text-black mt-2 bg-transparent border-solid border-neonBlue border-t-0 border-r-0 border-l-0 border-b-2 outline-none w-[20%]"
                      ></input>
                      <button
                        type="button"
                        className="pl-2 dark:text-white text-black border-neonBlue border-t-0 border-r-0 border-l-0 border-b-2 hover:text-neonBlue ease-in-out transition duration-100"
                        // This error is annoying but doesn't change functionality
                        onClick={handleHashtagAddition}
                      >
                        Add
                      </button>
                    </div>
                    <button
                      onClick={createPostHandler}
                      className={`${
                        createPostCheck ? "hidden" : "block"
                      } px-4 mt-2 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 hover:scale-105`}
                      type="submit"
                    >
                      Create
                    </button>
                    <div
                      className={`${
                        createPostCheck ? "block" : "hidden"
                      } text-customPurple mt-4 flex`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-10 h-10"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </form>
                </div>
              </div>

              {/* <div className="mt-3 h-[20vh] border-0 dark:shadow-notificationShadowPink dark:bg-coolGray bg-white border-black shadow-xl dark:border-customPurple rounded-xl p-2 w-[90%]">
                        <h1>sdf</h1>
            </div> */}
              <div className="max-w-sm mt-3 w-[50%]">
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-32 flex flex-col justify-center border-0 dark:shadow-notificationShadowPink dark:bg-coolGray bg-white border-black shadow-xl dark:border-customPurple rounded-xl p-2">
                    <h3 className="text-black font-semibold text-center dark:text-white">
                      Go Pro!
                    </h3>
                    <p className="text-gray-500 text-sm  text-center">
                      First Month Free!
                    </p>
                    <button className="ml-2 mr-2 px-4 py-2 mt-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 hover:scale-105">
                      Sign up
                    </button>
                  </div>
                  <div
                    className="h-32 border-0 dark:shadow-notificationShadowPink dark:bg-coolGray bg-white border-black shadow-xl dark:border-customPurple rounded-xl p-2"
                    // onClick={likeCounterClickHandler}
                  >
                    <h3 className="text-black text-center font-semibold dark:text-white">
                      Like Counter
                    </h3>
                    <h3 className=" text-gray-500 text-center text-sm">
                      Your Post's Likes
                    </h3>
                    <div className="flex justify-around items-center mt-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="currentColor"
                        className="text-red-600 w-14 h-14"
                      >
                        <path
                          fill="#cc0000"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>
                      <h1 className="text-black text-[54px] dark:text-white">
                        {singleUserData ? singleUserData.getUserById.likes.length : '0'}
                      </h1>
                    </div>
                  </div>
                  {singleUserData && (
                    <div className="h-32 border-0 dark:shadow-notificationShadowPink dark:bg-coolGray bg-white border-black shadow-xl dark:border-customPurple rounded-xl p-2">
                      <h3 className="text-black font-semibold dark:text-white text-center">
                        Posts Counter
                      </h3>
                      <h3 className=" text-gray-500 text-sm text-center">
                        Number Of Posts
                      </h3>
                      <div className="flex justify-around items-center mt-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1}
                          stroke="currentColor"
                          className="w-14 h-14 text-blue-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                          />
                        </svg>

                        <h1 className="text-black text-[54px] dark:text-white">
                          {singleUserData.getUserById.posts.length}
                        </h1>
                      </div>
                    </div>
                  )}

                  <div className="h-32 border-0 dark:shadow-notificationShadowPink dark:bg-coolGray bg-white border-black shadow-xl dark:border-customPurple rounded-xl p-2">
                    <h3 className="text-black font-semibold dark:text-white text-center">
                      Messages
                    </h3>
                    <div className="">
                      <div className="flex items-center justify-between">
                        <h3 className=" text-gray-500 text-[12px] text-center">
                          Recieved
                        </h3>
                        <div className="flex justify-around items-center mt-0">
                          <h2 className="text-black dark:text-white text-[30px] mr-1">
                            19
                          </h2>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-10 h-10 text-green-600"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <h3 className=" text-gray-500 text-[12px] text-center">
                          Sent
                        </h3>
                        <div className="flex justify-around items-center mt-0">
                          <h2 className="text-black text-[30px] mr-1 dark:text-white">
                            219
                          </h2>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-10 h-10 text-blue-700"
                            transform="scale(1,1) scale(-1,1)"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 
            <div
              className={`max-w-sm mt-3 border-0 dark:shadow-notificationShadowPink dark:bg-coolGray bg-white border-black shadow-xl dark:border-customPurple rounded-xl p-2 w-[50%]`}
            >
              <h3 className="text-black font-semibold dark:text-white">
                Go Pro!
              </h3>
              <p className="text-black font-semibold dark:text-white">
                Get a one month free trial idk
              </p>
              <button className=" px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 hover:scale-105">
                Sign up
              </button>
            </div> */}
              {whoToFollowState && (
                <div className="max-w-sm mt-3 border-0 dark:shadow-notificationShadowPink dark:bg-coolGray bg-white border-black shadow-xl dark:border-customPurple rounded-xl p-2 w-[50%]">
                  <h3 className="text-black font-semibold dark:text-white">
                    Who To Follow
                  </h3>
                  {whoToFollowState.map((username: string, index: any) => {
                    return (
                      <div
                        className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
                        key={index}
                      >
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
                              className="text-black font-semibold dark:text-white px-3 py-2"
                              aria-current="page"
                            >
                              {username}
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* <div className="homepageInfoDivs">
              <h3>Your Interests</h3> */}
              <form className="max-w-sm mt-3 border-0 dark:shadow-notificationShadowPink dark:bg-coolGray bg-white border-black shadow-xl dark:border-customPurple rounded-xl p-2 w-[50%]">
                <div className="mb-2">
                  <h3 className="text-black font-semibold dark:text-white">
                    Follow Hashtags
                  </h3>
                  <div className="flex items-center flex-wrap infoInterestsDiv">
                    <label
                      id="interest1"
                      className="ml-2 text-black font-normal dark:text-white"
                    >
                      Travel
                    </label>
                    <input
                      type="checkbox"
                      id="interest1"
                      name="interest1"
                      className="form-checkbox ml-2 h-4 w-4 text-blue-500"
                    ></input>
                    <label
                      id="interest1"
                      className="ml-2 text-black font-normal dark:text-white"
                    >
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
                    <label
                      id="interest1"
                      className="ml-2 text-black font-normal dark:text-white"
                    >
                      Coding
                    </label>
                    <input
                      type="checkbox"
                      id="interest1"
                      name="interest1"
                      className="form-checkbox ml-2 h-4 w-4 text-blue-500"
                    ></input>
                    <label
                      id="interest1"
                      className="ml-2 text-black font-normal dark:text-white"
                    >
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
        )}
      </div>

      {showLikeModalState && (
        <LikeFollowerModal
          handleClose={() => {
            setShowLikeModalState(false);
          }}
          users={likeModalDataState ?? []} // Use nullish coalescing operator to provide a default value
        />
      )}

      {showModalState && (
        <PostModal
          //The error is that this data is possibly null which is fine
          title={activePostData.title}
          media={activePostData.media}
          preview={activePostData.preview}
          body={activePostData.body}
          date={activePostData.createdAt}
          comments={activePostData.comments}
          hashtags={activePostData.hashtags}
          username={activePostData.username}
          likes={activePostData.likes}
          pfp={activePostData.pfp}
          postId={activePostData._id}
          firstName={activePostData.firstName}
          lastName={activePostData.lastName}
          handleClose={function (): void {
            setShowModalState(false);
          }}
        />
      )}
    </div>
  );
}

export default HomeController;
