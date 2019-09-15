import styled from "styled-components";
import socket from "../socket";

const CommandGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.25fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  border: 1px solid black;
  grid-gap: 3px;
  button {
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.05);
    border: 0;
    background: #4e5250;
    border: 4px solid transparent;
    color: white;
    font-size: 1rem;
    position: relative;
    &:active {
      top: 2px;
    }
    &:focus {
      outline: 0;
      border-color: black;
    }
    &.takeoff {
      background: #4e5250;
    }
    &.land {
      background: #4e5250;
    }
    &.emergency {
      background: red;
      text-transform: uppercase;
      color: black;
    }
    &.rotate {
      background: #4e5250;
      color: black;
    }
    &.height {
      background: #4e5250;
      color: black;
    }
    span.symbol {
      display: block;
      font-size: 2rem;
      font-weight: 400;
    }
  }
  .center {
    display: grid;
    grid-gap: 3px;
    grid-template-columns: 1fr 1fr;
    button:last-child {
      grid-column: span 2;
    }
  }
  h2 {
    grid-column: 1 / -1;
    background: #4e5250;
    margin: 0;
    font-size: 1rem;
    text-align: center;
    padding: 0.5rem;
    color: black;
  }
`;

function sendCommand(command) {
  return function() {
    console.log(`Sending the command ${command}`);
    socket.emit("command", command);
  };
}


const Stream = () => (
  <CommandGrid>
    <button className="rotate" onClick={sendCommand("streamon")}>
      <span className="symbol"></span> Stream On
    </button>
    <button className="rotate" onClick={sendCommand("streamoff")}>
      <span className="symbol"></span> Stream Off
    </button>
  </CommandGrid>
);

export default Stream;