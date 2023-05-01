// {
//   "name": "server",
//   "version": "1.0.0",
//   "description": "",
//   "main": "dist/index.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "prebuild": "tslint -c tslint.json -p tsconfig.json --fix",
//     "build": "tsc",
//     "watch": "tsc -w",
//     "prestart": "npm build",
//     "start": "nodemon .",
//     "dev": "concurrently --kill-others \"npm watch\" \"npm start\""
//   },
//   "keywords": [],
//   "author": "",
//   "license": "ISC",
//   "dependencies": {
//     "@types/express": "^4.17.17",
//     "express": "^4.18.2",
//     "nodemon": "^2.0.22",
//     "socket.io": "^4.6.1",
//     "tslint": "^6.1.3",
//     "typescript": "^5.0.4"
//   }
// }
import "./App.css";
import { Join } from "./components/Join";

function App() {
    return (
        <div className="App flex items-center justify-center w-screen h-screen">
            <Join />
        </div>
    );
}

export default App;