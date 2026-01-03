import { k } from "../global/kaplay";

k.loadRoot("/");

k.loadSprite("cactus_alone", "cacto1.png");
k.loadSprite("cactus_pair", "cacto2.png");
k.loadSprite("cactus_trio", "cacto3.png");
export function buildCactus(speed: number) {
    const minGap = 1.5;
    const maxGap = 2.5;
    const gapTime = Math.random() * (maxGap - minGap) + minGap;
    const minDistance = gapTime * (30000 / speed);

    const cactusSelected = Math.floor(Math.random() * 3 + 1);

    let config = {
        sprite: "cactus_alone",
        pos: k.vec2(k.width(), k.height() / 2 + 30),
        area: { scale: new k.Vec2(0.3, 0.8), offset: new k.Vec2(0, 0) },
    };

    if (cactusSelected === 2) {
        config = {
            sprite: "cactus_pair",
            pos: k.vec2(k.width() + 50, k.height() / 2 + 30),
            area: { scale: new k.Vec2(0.6, 0.7), offset: new k.Vec2(0, -1) },
        };
    } else if (cactusSelected === 3) {
        config = {
            sprite: "cactus_trio",
            pos: k.vec2(k.width() + 50, k.height() / 2 + 30),
            area: { scale: new k.Vec2(0.9, 0.75), offset: new k.Vec2(-1, 0) },
        };
    }

    k.add([
        k.sprite(config.sprite),
        k.pos(config.pos),
        k.area(config.area),
        k.body({ stickToPlatform: true }),
        k.anchor("bot"),
        k.offscreen({ destroy: true }),
        "cactus",
    ]);

    return minDistance;
}
