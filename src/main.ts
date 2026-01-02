import { k } from "./utils/global/kaplay";
import { setCloud } from "./utils/sprites/clouds";
import { setupFloor } from "./utils/sprites/floor";

k.setGravity(1000);

setupFloor(false);

let minTime = 5;
let maxTime = 9;

const time = Math.floor(Math.random() * (maxTime - minTime + 1) + minTime);
setCloud(true);

setInterval(() => {
    setCloud(false);
}, time * 1000);
