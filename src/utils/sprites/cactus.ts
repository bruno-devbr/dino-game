import { k } from "../global/kaplay";

k.loadRoot("/assets/");

k.loadSprite("cactus_alone", "cacto1.png");
k.loadSprite("cactus_pair", "cacto2.png");
k.loadSprite("cactus_trio", "cacto3.png");

export function buildCactus(speed: number) {
    let minGap = 0;
    let maxGap = 0;

    if (speed < 175) {
        minGap = 4;
        maxGap = 6;
    } else if (speed < 205) {
        minGap = 2;
        maxGap = 4;
    } else if (speed < 300) {
        minGap = 1;
        maxGap = 2;
    } else {
        minGap = 0.1;
        maxGap = 0.5;
    }

    const gapBase = Math.random() * (maxGap - minGap) + minGap;
    const minDistance = gapBase * speed;

    const cactusSelected = Math.floor(Math.random() * 3 + 1);

    if (cactusSelected === 1) {
        const cacto = k.add([
            k.sprite("cactus_alone"),
            k.pos(k.width(), k.height() / 2 - 25),
            k.area(),
            k.body({ stickToPlatform: true }),

            "cactus",
        ]);

        const event = cacto.onUpdate(() => {
            if (cacto.pos.x < -50) {
                cacto.destroy();
            }
        });

        cacto.onDestroy(() => {
            event.cancel();
        });
    } else if (cactusSelected === 2) {
        const cacto = k.add([
            k.sprite("cactus_pair"),
            k.pos(k.width(), k.height() / 2 - 25),
            k.area(),
            k.body({ stickToPlatform: true }),

            "cactus",
        ]);

        const event = cacto.onUpdate(() => {
            if (cacto.pos.x < -50) {
                cacto.destroy();
            }
        });

        cacto.onDestroy(() => {
            event.cancel();
        });
    } else if (cactusSelected === 3) {
        const cacto = k.add([
            k.sprite("cactus_trio"),
            k.pos(k.width(), k.height() / 2 - 25),
            k.area(),
            k.body({ stickToPlatform: true }),

            "cactus",
        ]);

        const event = cacto.onUpdate(() => {
            if (cacto.pos.x < -50) {
                cacto.destroy();
            }
        });

        cacto.onDestroy(() => {
            event.cancel();
        });
    }

    return minDistance;
}
