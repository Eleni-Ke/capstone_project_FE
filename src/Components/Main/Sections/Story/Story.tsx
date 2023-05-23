import NavBar from "../../Navbar/NavBar";
import React, { useEffect, useState } from "react";

// import ReactFlow, { Edge, Node } from "reactflow";
import "reactflow/dist/base.css";
import { useNavigate } from "react-router-dom";

// import { IoIosConstruct } from "react-icons/io";
import { useAppSelector } from "../../../../redux/hooks";
import StoryCard from "./StoryCard";
import AddStoryModal from "./AddStoryModal";

const Story = () => {
  const allStories = useAppSelector((state) => state.stories.stories);
  const accessToken = localStorage.getItem("accessToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="d-flex">
      <NavBar />
      <div className="d-flex flex-column w-100 position-absolute">
        <div className="background-table d-flex justify-content-center">
          <div className="main-section main-stories mx-2 mb-4">
            <div className="banner-story banner">
              <h2 className="section-title">The Story</h2>
            </div>
            <div className="d-flex flex-wrap justify-content-around">
              {allStories &&
                allStories.length > 0 &&
                allStories.map((story: any, index: number) => {
                  return (
                    <StoryCard
                      story={story}
                      index={index + 1}
                      key={story._id}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <AddStoryModal />
    </div>
  );
};

export default Story;

// {/* <div className="p-3 contruction-message">
//             <IoIosConstruct />
//             <p>
//               <u>Story Line:</u> <br />
//               This new feature is currently being built! <br /> Stay tuned to
//               see when you can use it!
//             </p>
//           </div> */}
