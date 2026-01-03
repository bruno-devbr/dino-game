import { k } from "../global/kaplay";

k.loadRoot("/assets/");
k.loadSprite("dinos", "dino.png", {
    sliceX: 7,
    anims: {
        idle: {
            frames: [0],
        },
        jump: {
            frames: [0],
        },
        run: {
            from: 2,
            to: 3,
            loop: true,
        },
        crouch: {
            from: 5,
            to: 6,
            loop: true,
        },
        hit: {
            frames: [4],
        },
    },
});

export const dino = k.add([
    k.sprite("dinos", { width: 70, height: 46 }),
    k.pos(50, k.height() / 2 + 40),
    k.area({
        collisionIgnore: ["dino"],
        scale: new k.Vec2(0.4, 1),
        offset: new k.Vec2(-10, -10),
    }),
    k.body({ stickToPlatform: false, jumpForce: 300 }),
    k.anchor("bot"),
    k.z(20),
    "dino",
]);
