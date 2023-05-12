import React, { useState, useEffect } from "react";
import ReactFlow, { Edge, Node, NodeDragHandler } from "react-flow-renderer";
import { useAppSelector } from "../../../../../redux/hooks";
import { ICharacter } from "../../../../../redux/interfaces/ICharacter";
import NavBar from "../../../Navbar/NavBar";

const Relationships = () => {
  const allCharacters = useAppSelector((state) => state.characters.characters);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  const generateNodes = () => {
    const newNodes = allCharacters.map(
      (character: ICharacter, index: number) => {
        const img = character.images?.[0] || "";
        const node: Node = {
          id: character._id,
          data: {
            label: character.name,
            img,
          },
          position: {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          },
          type: "default",
        };
        return node;
      }
    );
    setNodes(newNodes);
  };
  useEffect(() => {
    generateNodes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onNodeDragStop: NodeDragHandler = (event, node) => {
    const updatedNodes = nodes.map((n) => {
      if (n.id === node.id) {
        return {
          ...n,
          position: { x: node.position.x, y: node.position.y },
        };
      }
      return n;
    });
    setNodes(updatedNodes);
  };

  return (
    <div className="d-flex">
      <NavBar />

      <div className="d-flex flex-column w-100">
        <div className="banner-story banner">
          <h2>Relationships between characters:</h2>
        </div>
        <div className="relationshipFlow-main">
          <ReactFlow nodes={nodes} onNodeDragStop={onNodeDragStop} />
        </div>
      </div>
    </div>
  );
};

export default Relationships;
