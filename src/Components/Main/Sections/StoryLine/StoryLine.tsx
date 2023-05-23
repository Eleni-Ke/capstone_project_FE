import NavBar from "../../Navbar/NavBar";
import React, { useEffect, useState } from "react";

// import ReactFlow, { Edge, Node } from "reactflow";
import "reactflow/dist/base.css";
import { useNavigate } from "react-router-dom";

import { IoIosConstruct } from "react-icons/io";

const StoryLine = () => {
  // const initialEdges: Edge[] = [
  //   {
  //     id: "e1-2",
  //     source: "1",
  //     target: "2",
  //   },
  // ];
  // const initialNodes: Node[] = [
  //   {
  //     id: "1",
  //     data: { label: "Input Node" },
  //     type: "input",
  //     position: { x: 5, y: 5 },
  //   },
  //   {
  //     id: "2",
  //     data: { label: "Output Node" },
  //     type: "output",
  //     position: { x: 50, y: 50 },
  //   },
  //   {
  //     id: "3",
  //     data: { label: "Default Node" },
  //     type: "default",
  //     position: { x: 100, y: 100 },
  //   },
  // ];

  const accessToken = localStorage.getItem("accessToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    // <div className="d-flex">
    //   <NavBar />

    //   <div className="d-flex flex-column w-100">
    //     <div className="banner-story banner">
    //       <h2>The story line:</h2>
    //     </div>
    //     <div className="storyLine-main">
    //       <ReactFlow
    //         defaultEdges={initialEdges}
    //         defaultNodes={initialNodes}
    //       ></ReactFlow>
    //     </div>
    //   </div>
    // </div>
    <div className="d-flex">
      <NavBar />
      <div className="d-flex flex-column w-100 position-absolute">
        <div className="background-table d-flex justify-content-center align-items-center">
          <div className="p-3 contruction-message">
            <IoIosConstruct />
            <p>
              This new feature is currently being built! <br /> Stay tuned to
              see when you can use it!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryLine;
