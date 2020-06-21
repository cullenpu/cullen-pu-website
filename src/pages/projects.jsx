import React from "react";

import ProjectCard from "../components/ProjectCard.jsx";
import "./styles.css";

const politicGame = {
  subtitle: null,
  description: `An Android application consisting of three minigames meant to serve 
  as a satirical politician simulator with support for user login, leaderboards, and 
  unlockable sprites.`,
};

const arcticMiner = {
  subtitle: `Made for UofTHacks VII\nWinner: ChainSafe’s Build With Blockchain Award`,
  description: `An application allowing users to collect penguins on an ethereum
  blockchain, helping users visualize and understand the concept of blockchain.`,
};

const mealPrep4U = {
  subtitle: `Made for BostonHacks 2019`,
  description: `A web application designed to help university students meal prep by 
  generating ingredients based on user's ingredients and preferences to provide healthy, 
  cost-reducing meals.`,
};

const Projects = () => {
  return (
    <div className="container" id="projects">
      <h1 className="section text-center">projects</h1>
      <div className="project-column pr-3">
        {/* Politic Game */}
        <ProjectCard
          src={require("../resources/projects/politic-game.jpg")}
          name="Politic Game"
          subtitle={politicGame.subtitle}
          description={politicGame.description}
          github="https://github.com/Cullenpu/politic-game"
          devpost={null}
        />
      </div>
      <div className="project-column pl-3">
        {/* Arctic Miner */}
        <ProjectCard
          src={require("../resources/projects/arctic-miner.PNG")}
          name="Arctic Miner"
          subtitle={arcticMiner.subtitle}
          description={arcticMiner.description}
          github="https://github.com/Cullenpu/arctic-miner"
          devpost="https://devpost.com/software/blockchaingame"
        />
        {/* Meal Prep 4 U */}
        <ProjectCard
          src={require("../resources/projects/meal-prep-4-U.png")}
          name="Meal Prep 4 U"
          subtitle={mealPrep4U.subtitle}
          description={mealPrep4U.description}
          github="https://github.com/Cullenpu/meal-prep-4-u"
          devpost="https://devpost.com/software/meal-prep-4-u"
        />
      </div>
    </div>
  );
};

export default Projects;
