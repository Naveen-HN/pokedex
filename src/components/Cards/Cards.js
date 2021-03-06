import React, { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import Speech from "react-speech";

export default function Cards(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  const style = {
    container: {},
    text: {},
    buttons: {},
    play: {
      hover: {
        backgroundColor: "GhostWhite",
      },
      button: {
        borderTop: "10px solid white",
        borderBottom: "10px solid white",
        borderLeft: "20px solid black",
        height: "0px",
        backgroundColor: "red",
      },
    },
    pause: {
      hover: {},
      button: {},
    },
    stop: {
      hover: {},
      button: {},
    },
    resume: {
      hover: {},
      button: {},
    },
  };

  useEffect(() => {
    let flipTimeout;
    if (isFlipped) {
      flipTimeout = setTimeout(() => {
        setIsFlipped(false);
      }, 5000);
    }
    return () => clearTimeout(flipTimeout);
  }, [isFlipped]);
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div
        className="card bg-white mb-3"
        style={{
          width: "20rem",
          height: "13.6rem",
          maxWidth: "20rem",
          maxHeight: "13.6rem",
          boxShadow:
            "0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <span class="badge badge-info" style={{ width: "30px", float: "left" }}>
          {props.data.number}
        </span>
        <div className="card-body">
          <img
            src={props.data.image}
            alt="pokemon"
            style={{ height: "7rem", width: "7.5rem", margin: "auto" }}
            onClick={() => setIsFlipped(!isFlipped)}
          />
          <center>
            <h5 className="card-title">{props.data.name}</h5>
          </center>
          <div class="custom-control custom-switch">
            <input
              type="checkbox"
              class="custom-control-input"
              id={props.data.number}
              onClick={(e) => props.handleToggleClick(e)}
            />
            <label class="custom-control-label" for={props.data.number}>
              Captured
            </label>
            <span> </span>
            <Speech styles={style} text={props.data.name} voice="Fiona" />
          </div>
        </div>
      </div>
      <div
        className="card"
        style={{
          width: "20rem",
          height: "13.6rem",
          maxWidth: "20rem",
          maxHeight: "13.6rem",
          boxShadow:
            "0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="card-body">
          <h5 className="card-text">
            Type:{" "}
            {props.data.types.map((type, index) => {
              switch (type) {
                case "Grass":
                  return (
                    <span key={index} class="badge bg-success text-light">
                      {type}
                    </span>
                  );
                case "Water":
                  return (
                    <span key={index} class="badge bg-primary text-light">
                      {type}
                    </span>
                  );
                case "Fire":
                  return (
                    <span key={index} class="badge bg-danger text-light">
                      {type}
                    </span>
                  );
                case "Poison":
                  return (
                    <span
                      key={index}
                      class="badge text-light"
                      style={{ background: "purple" }}
                    >
                      {type}
                    </span>
                  );
                case "Bug":
                  return (
                    <span
                      key={index}
                      class="badge text-dark"
                      style={{ background: "lightgreen" }}
                    >
                      {type}
                    </span>
                  );
                case "Flying":
                  return (
                    <span
                      key={index}
                      class="badge"
                      style={{ background: "silver" }}
                    >
                      {type}
                    </span>
                  );
                case "Electric":
                  return (
                    <span key={index} class="badge bg-warning text-dark">
                      {type}
                    </span>
                  );
                case "Ground":
                  return (
                    <span
                      key={index}
                      class="badge text-light"
                      style={{ background: "brown" }}
                    >
                      {type}
                    </span>
                  );
                case "Fairy":
                  return (
                    <span
                      key={index}
                      class="badge"
                      style={{ background: "lightpink" }}
                    >
                      {type}
                    </span>
                  );
                case "Fighting":
                  return (
                    <span
                      key={index}
                      class="badge text-light"
                      style={{ background: "#654321" }}
                    >
                      {type}
                    </span>
                  );
                case "Psychic":
                  return (
                    <span
                      key={index}
                      class="badge text-light"
                      style={{ background: "violet" }}
                    >
                      {type}
                    </span>
                  );
                case "Steel":
                  return (
                    <span
                      key={index}
                      class="badge text-light"
                      style={{ background: "silver" }}
                    >
                      {type}
                    </span>
                  );
                case "Ice":
                  return (
                    <span
                      key={index}
                      class="badge text-dark"
                      style={{ background: "aqua" }}
                    >
                      {type}
                    </span>
                  );
                case "Ghost":
                  return (
                    <span key={index} class="badge bg-dark text-light">
                      {type}
                    </span>
                  );
                case "Dragon":
                  return (
                    <span
                      key={index}
                      class="badge text-dark"
                      style={{ background: "#98DFC3" }}
                    >
                      {type}
                    </span>
                  );
                default:
                  return (
                    <span key={index} class="badge bg-secondary text-light">
                      {type}
                    </span>
                  );
              }
            })}
          </h5>
          <p className="card-text">
            <b className="card-text">Classfication:</b>{" "}
            <span
              class="badge badge-pill badge-dark"
              style={{ background: "#c06c84" }}
            >
              {props.data.classification}
            </span>
            <br />
            <b className="card-text">Height:</b>{" "}
            <span
              class="badge badge-pill  text-dark"
              style={{ background: "#99b898" }}
            >
              {props.data.height.maximum}
            </span>
            <br />
            <b className="card-text">Weight:</b>{" "}
            <span
              class="badge badge-pill badge-dark"
              style={{ background: "#cc527a" }}
            >
              {props.data.weight.maximum}
            </span>
            <br />
            <b className="card-text">Special Attacks:</b>{" "}
            {props.data.attacks.special.map((att, i) => (
              <span
                key={i}
                class="badge badge-pill badge-dark"
                style={{ background: "#355C7D" }}
              >
                {att.name}
              </span>
            ))}
          </p>
        </div>
      </div>
    </ReactCardFlip>
  );
}
