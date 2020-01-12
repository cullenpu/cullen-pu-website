import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <div className="container" id="projects">
        <h1 className="text-center">projects</h1>
        <div className="row">
          <div className="col-md">
            <div className="card">
              <img
                className="card-img-top"
                src={require("../resources/projects/politician-simulator.png")}
                alt="Politic Game"
              />
              <div className="card-body bg-secondary text-white">
                <div className="card-title">
                  <h5>Politic Game</h5>
                </div>
                <div className="card-text">
                  <p>
                    A humorous politician simulator consisting of three
                    minigames. The first minigame has the user attempt to please
                    a needy baby. The second minigame requires the user to type
                    the correct politics-based keyword based on a given
                    description. The final minigame has the user approve or
                    disprove bills.
                  </p>
                  <a
                    href="https://github.com/Cullenpu/politic-game"
                    className="btn btn-outline-light btn-sm text-monospace"
                    target="_blank"
                  >
                    github
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card">
              <img
                className="card-img-top"
                src={require("../resources/projects/meal-prep-4-U.png")}
                alt="Meal Prep 4 U"
              />
              <div className="card-body bg-secondary text-white">
                <div className="card-title">
                  <h5>Meal Prep 4 U</h5>
                </div>
                <div className="card-text">
                  <p>
                    A web application designed to help university students meal
                    prep by generating ingredients based on user's ingredients
                    and preferences to provide healthy, cost-reducing meals.
                  </p>
                  <a
                    href="https://github.com/Cullenpu/meal-prep-4-u"
                    className="btn btn-outline-light btn-sm text-monospace"
                    target="_blank"
                  >
                    github
                  </a>
                  <a
                    href="https://devpost.com/software/meal-prep-4-u"
                    className="btn btn-outline-light btn-sm text-monospace"
                    target="_blank"
                  >
                    devpost
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
