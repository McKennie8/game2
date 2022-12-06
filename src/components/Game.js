import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { upcomingGamesURL } from "../api";

const Game = ({ name, released, image, id, key }) => {
  return (
    <StyledGame>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name} />
    </StyledGame>
  );
};
const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
  border-radius: 1rem;
  text-align: center;
`;

export default Game;
