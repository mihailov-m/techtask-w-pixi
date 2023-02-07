import * as PIXI from 'pixi.js'
import { AnimatedSprite } from "pixi.js";

export type EnemyPosition = {x: number, y: number};

export class Enemy {
    
    private sprite: AnimatedSprite;

    constructor(sourceFrames: string[], position: EnemyPosition) {
        this.sprite = PIXI.AnimatedSprite.fromFrames(sourceFrames);

        this.sprite.width *= 4;
        this.sprite.height *= 4;
        this.sprite.animationSpeed = 1 / 6;

        this.sprite.gotoAndPlay(Math.floor(Math.random() * sourceFrames.length));

        this.sprite.interactive = true;
        this.sprite.buttonMode = true;

        this.sprite.position.set(position.x, position.y);
    }

    public getSprite(): AnimatedSprite {
        return this.sprite;
    }

    public setOnClickCallback(callback: Function): void {
        this.sprite.on('pointerdown', () => callback());
    }    
}