import { k } from "../global/kaplay";

k.loadRoot("/assets/");
k.loadSprite("cloud", "cloud.png");

export function setCloud(value: boolean) {
    const minHeight = 100;
    const maxHeight = 300;

    const height = Math.floor(
        Math.random() * (maxHeight - minHeight + 1) + minHeight
    );

    const cloud = k.add([
        k.sprite("cloud"),
        k.pos(k.width(), height),
        k.offscreen({ destroy: true }),
        "cloud",
    ]);

    if (!value) return;

    cloud.onUpdate(() => {
        cloud.move(-25, 0);
    });
}
