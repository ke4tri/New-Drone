import React from 'react';
import '../Commands/Commands.css';
import socket from "../../socket";
import CommandGrid from "../Style/CommandGrid";

class CommandsReact extends React.Component {
  state = {
    modal: false,
  }

  static propTypes = {
  
  }

   cmToFeet = (cm) =>{
    const newMath = Math.round(cm);
    return newMath.toString();
  }
  
  
  sendCommand(command) {
    return function() {
      console.log(`Sending the command ${command}`);
      socket.emit("command", command);
    };
  }
  


  render() {
    const generalAmount = 100;
    const forwardAmount = 200;
    const sideAmount = 20;
    return (
      <CommandGrid>
      <div className='commandsReact'>
        <button className="rotate" onClick={this.sendCommand("ccw 90")}>
      <span className="symbol">⟲</span> 90°
    </button>
    <button onClick={this.sendCommand(`forward ${forwardAmount}`)}>
      <span className="symbol">↑</span> FORWARD 7 ft
    </button>
    <button className="rotate" onClick={this.sendCommand("cw 180")}>
      <span className="symbol">⟳</span> 180°
    </button>
    <button onClick={this.sendCommand(`left ${sideAmount}`)}>
      <span className="symbol">←</span> LEFT 1 ft
    </button>
    <div className="center">
      <button className="takeoff" onClick={this.sendCommand("takeoff")}>
        TAKE OFF
      </button>
      <button className="land" onClick={this.sendCommand("land")}>
        LAND
      </button>
      <button className="emergency" onClick={this.sendCommand("emergency")}>
        !! EMERGENCY !!
      </button>
    </div>
    <button onClick={this.sendCommand(`right ${sideAmount}`)}>
      <span className="symbol">→</span>
      RIGHT 1 ft
    </button>
    <button className="height" onClick={this.sendCommand(`up ${generalAmount}`)}>
      <span className="symbol">⤒</span> 3 ft
    </button>
    <button onClick={this.sendCommand(`back ${generalAmount}`)}>
      <span className="symbol">↓</span> BACK 3 ft
    </button>
    <button className="height" onClick={this.sendCommand(`down ${generalAmount}`)}>
      <span className="symbol">⤓</span> 3 ft
    </button>
    <h2>Fancy Pants</h2>
    <button onClick={this.sendCommand("flip l")}>Flip Left</button>
    <button onClick={this.sendCommand("flip r")}>Flip Right</button>
    <button onClick={this.sendCommand("flip b")}>Flip Back</button>
    <button onClick={this.sendCommand("flip f")}>Flip Forward</button>
    <button onClick={this.sendCommand("go 25 25 25 25")}>Go 25 25 25 25</button>
    <button onClick={this.sendCommand("curve 100 100 100 150 250 350 50")}>
      Curve!
    </button>
      </div>
      </CommandGrid>
    );
  }
}

export default CommandsReact;