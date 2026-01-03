import { k } from "../global/kaplay";
import { buildCactus } from "./cactus";

k.loadRoot("/");
k.loadSprite("floor", "floor.png");

const floorArr: ReturnType<typeof k.add>[] = [];
let event: ReturnType<typeof k.onUpdate> | undefined;

export function setupFloor(value: boolean) {
    let speed = 125;
    let count = 0;

    let minDistance = buildCactus(speed);

    floorArr.length = 0;
    k.destroyAll("floor");

    for (let i = 0; i < 2; i++) {
        const floor = k.add([
            k.sprite("floor", { width: k.width() }),
            k.pos(i * k.width(), k.height() / 2),
            k.body({ isStatic: true }),
            k.area({ offset: new k.Vec2(0, 20) }),
            "floor",
        ]);

        floorArr.push(floor);
    }

    if (value) {
        event = k.onUpdate("floor", (f) => {
            f.move(-speed, 0);

            if (f.pos.x <= -k.width()) {
                f.pos.x = k.width();
            }

            if (count >= minDistance) {
                count = 0;
                minDistance = buildCactus(speed);

                if (speed < 600) {
                    speed += 10;
                }
            }

            count++;
        });
    } else {
        if (event) {
            event.cancel();
        }
    }
}
