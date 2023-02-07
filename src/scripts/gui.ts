import * as PIXI from 'pixi.js'

export class Gui {
    private pixiText: PIXI.Text;

    constructor() {
        this.pixiText = new PIXI.Text('');
        this.pixiText.x = 8;
        this.pixiText.y = 8;
        this.pixiText.style.fill = 0xdddddd;
    }

    setEnemiesCount(v: number) {
        this.pixiText.text = `Enemies left: ${v}`;
    }

    getSprite() {
        return this.pixiText;
    }
}