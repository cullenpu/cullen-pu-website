import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <div className="container" id="projects">
        <h1 className="text-center section">projects</h1>
        <div className="pr-3 project-column">
          {/* Politic Game */}
          <div className="card mb-4">
            <img
              className="card-img-top"
              src={require("../resources/projects/politic-game.jpg")}
              alt="Politic Game"
            />
            <div className="card-body">
              <h5 className="card-title">Politic Game</h5>
              <p className="card-text">
                An Android application consisting of three minigames meant to
                serve as a satirical politician simulator with support for user
                login, leaderboards, and unlockable sprites.
              </p>
              <a
                href="https://github.com/Cullenpu/politic-game"
                className="btn btn-outline-secondary btn-sm text-monospace project-btn"
                target="_blank"
              >
                github
              </a>
            </div>
          </div>
          {/* End Politic Game */}
        </div>
        <div className="pl-3 project-column">
          {/* Arctic Miner */}
          <div className="card mb-4">
            <img
              className="card-img-top"
              src={require("../resources/projects/arctic-miner.PNG")}
              alt="Arctic Miner"
            />
            <div className="card-body">
              <h5 className="card-title">Arctic Miner</h5>
              <h6 className="card-subtitle text-secondary mb-2">
                Made for UofTHacks VII
                <br />
                Winner: ChainSafe’s Build With Blockchain Award
              </h6>
              <p className="card-text">
                An application allowing users to collect penguins on an ethereum
                blockchain, helping users visualize and understand the concept
                of blockchain.
              </p>
              <a
                href="https://github.com/Cullenpu/arctic-miner"
                className="btn btn-outline-secondary btn-sm text-monospace project-btn"
                target="_blank"
              >
                github
              </a>
              <a
                href="https://devpost.com/software/blockchaingame"
                className="btn btn-outline-secondary btn-sm text-monospace project-btn"
                target="_blank"
              >
                devpost
              </a>
            </div>
          </div>
          {/* End Arctic Miner */}

          {/* Meal Prep 4 U */}
          <div className="card mb-4">
            <img
              className="card-img-top"
              src={require("../resources/projects/meal-prep-4-U.png")}
              alt="Meal Prep 4 U"
            />
            <div className="card-body">
              <h5 className="card-title">Meal Prep 4 U</h5>
              <h6 className="card-subtitle text-secondary mb-2">
                Made for BostonHacks 2019
              </h6>
              <p className="card-text">
                A web application designed to help university students meal prep
                by generating ingredients based on user's ingredients and
                preferences to provide healthy, cost-reducing meals.
              </p>
              <a
                href="https://github.com/Cullenpu/meal-prep-4-u"
                className="btn btn-outline-secondary btn-sm text-monospace project-btn"
                target="_blank"
              >
                github
              </a>
              <a
                href="https://devpost.com/software/meal-prep-4-u"
                className="btn btn-outline-secondary btn-sm text-monospace project-btn"
                target="_blank"
              >
                devpost
              </a>
            </div>
            {/* End Meal Prep 4 U */}
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
