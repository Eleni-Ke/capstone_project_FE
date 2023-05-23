import React, { useState, useEffect } from "react";
import ReactFlow, { Edge, Node, NodeDragHandler } from "react-flow-renderer";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../../../redux/hooks";
import { ICharacter } from "../../../../../redux/interfaces/ICharacter";
import { IRelationship } from "../../../../../redux/interfaces/IRelationship";
import NavBar from "../../../Navbar/NavBar";

const Relationships = () => {
  const allCharacters = useAppSelector((state) => state.characters.characters);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  const accessToken = localStorage.getItem("accessToken");

  const navigate = useNavigate();

  const generateNodes = () => {
    const newNodes = allCharacters.map(
      (character: ICharacter, index: number) => {
        const img = character.images?.[0] || "";
        const node: Node = {
          id: character._id!,
          data: {
            label: character.name,
            img,
          },
          position: {
            x: Math.random() * (window.innerWidth * 0.5),
            y: Math.random() * (window.innerHeight * 0.5),
          },
          type: "default",
          style: {
            backgroundColor: "#ecd7de",
          },
        };
        return node;
      }
    );
    setNodes(newNodes);
  };

  const generateEdges = () => {
    const newEdges = allCharacters.flatMap((character: ICharacter) => {
      return character.relationships!.flatMap((relationship: IRelationship) => {
        const edgeId = character._id + relationship.partner;

        // // Check if the edge already exists
        // const existingEdge = edges.find((edge: Edge) => edge.id === edgeId);

        // if (existingEdge) {
        //   return [];
        // }

        const edge: Edge = {
          id: edgeId,
          source: character._id!,
          target: relationship.partner,

          label: relationship.relationshipType,

          type: "custom",
        };
        return edge;
      });
    });
    setEdges(newEdges);
  };
  useEffect(() => {
    if (!accessToken) {
      navigate("/");
    }
    generateNodes();
    generateEdges();
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

      <div className="d-flex flex-column w-100 position-absolute">
        <div className="relationship-background">
          <div className="banner-story banner">
            <h2 className="section-title">Relationships between characters:</h2>
          </div>

          <div className="relationshipFlow-main">
            <ReactFlow
              nodes={nodes}
              onNodeDragStop={onNodeDragStop}
              edges={edges}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Relationships;
