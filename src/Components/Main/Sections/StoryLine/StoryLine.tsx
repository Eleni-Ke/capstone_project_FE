import NavBar from "../../Navbar/NavBar";
import React, { useState } from "react";

import ReactFlow, { Edge, Node } from "reactflow";
import "reactflow/dist/base.css";

const StoryLine = () => {
  const initialEdges: Edge[] = [
    {
      id: "e1-2",
      source: "1",
      target: "2",
    },
  ];
  const initialNodes: Node[] = [
    {
      id: "1",
      data: { label: "Input Node" },
      type: "input",
      position: { x: 5, y: 5 },
    },
    {
      id: "2",
      data: { label: "Output Node" },
      type: "output",
      position: { x: 50, y: 50 },
    },
    {
      id: "3",
      data: { label: "Default Node" },
      type: "default",
      position: { x: 100, y: 100 },
    },
  ];
  return (
    <div className="d-flex">
      <NavBar />

      <div className="d-flex flex-column w-100">
        <div className="banner-story banner">
          <h2>The story line:</h2>
        </div>
        <div className="storyLine-main">
          <ReactFlow
            defaultEdges={initialEdges}
            defaultNodes={initialNodes}
          ></ReactFlow>
        </div>
      </div>
    </div>
  );
};

export default StoryLine;
