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


function cmToFeet (cm){
  const newMath = Math.round(cm);
  return newMath.toString();
}


function sendCommand(command) {
  return function() {
    console.log(`Sending the command ${command}`);
    socket.emit("command", command);
  };
}


const generalAmount = 100;
const forwardAmount = 200;
const sideAmount = 20;
const Commands = () => (

  <CommandGrid>
    <button className="rotate" onClick={sendCommand("ccw 90")}>
      <span className="symbol">⟲</span> 90°
    </button>
    <button onClick={sendCommand(`forward ${forwardAmount}`)}>
      <span className="symbol">↑</span> FORWARD 7 ft
    </button>
    <button className="rotate" onClick={sendCommand("cw 180")}>
      <span className="symbol">⟳</span> 180°
    </button>
    <button onClick={sendCommand(`left ${sideAmount}`)}>
      <span className="symbol">←</span> LEFT 1 ft
    </button>
    <div className="center">
      <button className="takeoff" onClick={sendCommand("takeoff")}>
        TAKE OFF
      </button>
      <button className="land" onClick={sendCommand("land")}>
        LAND
      </button>
      <button className="emergency" onClick={sendCommand("emergency")}>
        !! EMERGENCY !!
      </button>
    </div>
    <button onClick={sendCommand(`right ${sideAmount}`)}>
      <span className="symbol">→</span>
      RIGHT 1 ft
    </button>
    <button className="height" onClick={sendCommand(`up ${generalAmount}`)}>
      <span className="symbol">⤒</span> 3 ft
    </button>
    <button onClick={sendCommand(`back ${generalAmount}`)}>
      <span className="symbol">↓</span> BACK 3 ft
    </button>
    <button className="height" onClick={sendCommand(`down ${generalAmount}`)}>
      <span className="symbol">⤓</span> 3 ft
    </button>
    <h2>Fancy Pants</h2>
    <button onClick={sendCommand("flip l")}>Flip Left</button>
    <button onClick={sendCommand("flip r")}>Flip Right</button>
    <button onClick={sendCommand("flip b")}>Flip Back</button>
    <button onClick={sendCommand("flip f")}>Flip Forward</button>
    <button onClick={sendCommand("go 25 25 25 25")}>Go 25 25 25 25</button>
    <button onClick={sendCommand("curve 100 100 100 150 250 350 50")}>
      Curve!
    </button>
  </CommandGrid>
);

export default Commands;
