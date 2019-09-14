# JavaScript Drones! 

Watch the videos:




⚠️️️ ⚠️ ️️⚠️️️ Use the codebase as your own risk. The drone can hurt you and I'm not responsible for that. Always test commands with the props removed first. Don't be dumb. ⚠️️️ ⚠️️️ ⚠️️️

# Flying a Drone with React and Node.js

## Software Used
* React (with React Hooks!)
* Styled Components for styling
* Node.js and UDP4 sockets for communicating with drone
* Socket.io WebSockets for sending data to/from the browser
* Next.js for easy react setup

## Hardware Used
* [DJI Tello Drone](https://amzn.to/2SvzqON)
* [Extra Batteries](https://amzn.to/2SyV70J) - it comes with one and I bought two extra. For continual development I'd say you only need two — one in the charger and one in the drone. For flying away from your house you definitely need at least 3 as they only last about 10-15 mins.
* [Fast Battery Charger with 4 slots](https://amzn.to/2SAWqwb)


## Using This Code

### Frontend

1. cd `frontend`
1. `npm install`
1. `npm run dev`


### Backend
1. cd `backend`
1. `npm install`
1. connect to drone via wifi
1. `npm start`


## Troubleshooting

[Docs for Tello are available here](https://dl-cdn.ryzerobotics.com/downloads/tello/20180910/Tello%20SDK%20Documentation%20EN_1.3.pdf)

I had to update the firmware of my drone when it came in the mail before I could use this 1.3 API. Do this via the Tello app on your phone.

If you let the drone's WIFI connection lapse, you have to restart the server by typing `rs` into the terminal. This will re-run the `command command` that puts the drone in SDK mode. If you don't do this, it will ignore any commands you send it.


