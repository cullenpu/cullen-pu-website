import React from "react";

import ProjectCard from "../components/ProjectCard";
import "./styles.css";

const politicGame = {
  src: require("../resources/projects/politic-game.jpg"),
  name: "Politic Game",
  subtitle: null,
  description: `An Android application consisting of three minigames meant to serve 
  as a satirical politician simulator with support for user login, leaderboards, and 
  unlockable sprites.`,
  github: "https://github.com/Cullenpu/politic-game",
  devpost: null,
};

const arcticMiner = {
  src: require("../resources/projects/arctic-miner.PNG"),
  name: "Arctic Miner",
  subtitle: `Made for UofTHacks VII\nWinner: ChainSafe’s Build With Blockchain Award`,
  description: `An application allowing users to collect penguins on an ethereum
  blockchain, helping users visualize and understand the concept of blockchain.`,
  github: "https://github.com/Cullenpu/arctic-miner",
  devpost: "https://devpost.com/software/blockchaingame",
};

const mealPrep4U = {
  src: require("../resources/projects/meal-prep-4-U.png"),
  name: "Meal Prep 4 U",
  subtitle: `Made for BostonHacks 2019`,
  description: `A web application designed to help university students meal prep by 
  generating ingredients based on user's ingredients and preferences to provide healthy, 
  cost-reducing meals.`,
  github: "https://github.com/Cullenpu/meal-prep-4-u",
  devpost: "https://devpost.com/software/meal-prep-4-u",
};

const Projects = () => {
  return (
    <div className="container" id="projects">
      <h1 className="section text-center">projects</h1>
      <div className="project-column pr-3">
        <ProjectCard {...politicGame} />
      </div>
      <div className="project-column pl-3">
        <ProjectCard {...arcticMiner} />
        <ProjectCard {...mealPrep4U} />
      </div>
    </div>
  );
};

export default Projects;
