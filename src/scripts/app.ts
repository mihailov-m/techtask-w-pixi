import * as PIXI from 'pixi.js'
import { Enemy, EnemyPosition } from './enemy';
import { Engine } from './engine';
import { GameState } from './game-state';
import { Gui } from './gui';

const engine = new Engine({
    containerId: 'game',
    canvasW: 155 * 4,
    canvasH: 96 * 4,
    scaleMode: PIXI.SCALE_MODES.NEAREST
});

const gameState = new GameState();
const gui = new Gui();

window.onload = load;

function load() {
    engine.loader.add('satyr', 'assets/satyr.json')
        .add('enemies_data', 'assets/enemies_data.json')
        .load((_, resources) => create(resources))
}

function create(resources: Partial<Record<string, PIXI.LoaderResource>>) {
    const bckg = PIXI.Sprite.from(resources!['satyr']!.textures!['rsz_1rsz_deep_forest'])
    bckg.width *= 4;
    bckg.height *= 4;
    engine.stage.addChild(bckg);

    let enemyPositions: EnemyPosition[] = resources['enemies_data']!.data;
    enemyPositions.forEach(position => {
        const enemy: Enemy = new Enemy(
            resources!['satyr']!.data.animations["satyr-Sheet-jump"],
            position
        );
        engine.stage.addChild(enemy.getSprite());
        enemy.setOnClickCallback(() => onEnemyClick(enemy));
    })

    gameState.setEnemiesCount(enemyPositions.length);

    gui.setEnemiesCount(enemyPositions.length);
    engine.stage.addChild(gui.getSprite());

    render();
}

function onEnemyClick(enemy: Enemy) {
    engine.stage.removeChild(enemy.getSprite());
    gameState.setEnemiesCount(gameState.getEnemiesCount() - 1);
    gui.setEnemiesCount(gameState.getEnemiesCount());
}

function render() {
    requestAnimationFrame(render);
    engine.renderer.render(engine.stage);
}