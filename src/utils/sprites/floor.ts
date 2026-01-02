import { k } from "../global/kaplay";
import { buildCactus } from "./cactus";

k.loadRoot("/assets/");
k.loadSprite("floor", "floor.png");

const floorArr = [];
let speed = 125;
let count = 0;

export function setupFloor(value: boolean) {
    let minDistance = buildCactus(speed);

    for (let i = 0; i < 2; i++) {
        const floor = k.add([
            k.sprite("floor", { width: k.width() }),
            k.pos(i * k.width(), k.height() / 2),
            k.body({ isStatic: true }),
            k.area({ offset: { y: 20, x: 0 } }),
            "floor",
        ]);

        floorArr.push(floor);
    }

    if (value) {
        k.onUpdate("floor", (f) => {
            f.move(-speed, 0);

            if (f.pos.x <= -k.width()) {
                f.pos.x = k.width();
            }

            count++;

            if (count >= minDistance) {
                count = 0;
                minDistance = buildCactus(speed);

                if (speed < 450) {
                    speed += 10;
                }
            }
        });
    }
}
