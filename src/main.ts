import { k } from "./utils/global/kaplay";
import { setCloud } from "./utils/sprites/clouds";
import { dino } from "./utils/sprites/dinos";
import { setupFloor } from "./utils/sprites/floor";

k.debug.inspect = true;

let isGameRunning = false;
let interval;

const minTime = 5;
const maxTime = 9;

let restart;
let time;

let dinoJumpEvent;
let dinoDieEvent;
let dinoDown;
let dinoGroundEvent;
let dinoStopCrounch;

function runGame() {
    k.setGravity(400);
    if (interval) clearInterval(interval);

    time = Math.floor(Math.random() * (maxTime - minTime + 1) + minTime);

    interval = setInterval(() => {
        setCloud(false);
        time = Math.floor(Math.random() * (maxTime - minTime + 1) + minTime);
    }, time * 1000);

    if (isGameRunning) {
        setupFloor(true);
        setCloud(true);

        dinoActions(true);
    } else {
        setupFloor(false);
        setCloud(false);

        dinoActions(false);
    }
}

restart = k.onKeyPress((e) => {
    if ((e === "space" || e === "up") && !isGameRunning) {
        k.destroyAll("cactus");
        k.destroyAll("cloud");

        dino.area.scale = new k.Vec2(0.4, 1);
        dino.area.offset = new k.Vec2(-10, -10);

        isGameRunning = true;
        runGame();
    }
});

runGame();

function dinoActions(value: boolean) {
    if (value) {
        dino.play("run");

        dinoJumpEvent = dino.onKeyDown((e) => {
            if ((e === "space" || e === "up") && dino.isGrounded()) {
                dino.jump();
                dino.play("idle");
            }
        });

        dinoDown = dino.onKeyPress((e) => {
            if (e === "down") {
                dino.play("crouch");
                k.setGravity(1500);

                dino.area.scale = new k.Vec2(0.5, 0.6);
                dino.area.offset = new k.Vec2(0, -10);
            }
        });

        dinoDieEvent = dino.onCollide("cactus", () => {
            dino.play("hit");
            k.setGravity(0);

            isGameRunning = false;
            runGame();
        });

        dinoGroundEvent = dino.onGround(() => {
            if (dino.frame === 0) {
                dino.play("run");
            }
        });

        dinoStopCrounch = k.onKeyRelease("down", () => {
            dino.play("run");
            k.setGravity(400);

            dino.area.scale = new k.Vec2(0.4, 1);
            dino.area.offset = new k.Vec2(-10, -10);
        });
    } else {
        dino.stop();

        if (dinoJumpEvent) dinoJumpEvent.cancel();
        if (dinoDieEvent) dinoDieEvent.cancel();
        if (dinoDown) dinoDown.cancel();
        if (dinoGroundEvent) dinoGroundEvent.cancel();
        if (dinoStopCrounch) dinoStopCrounch.cancel();
    }
}
