import * as PIXI from 'pixi.js'

interface EngineParams {
    containerId: string,
    canvasW: number,
    canvasH: number,
    scaleMode: PIXI.SCALE_MODES
}

export class Engine {
    public container: HTMLElement;
    public loader: PIXI.Loader;
    public renderer: PIXI.Renderer;
    public stage: PIXI.Container;
    public graphics: PIXI.Graphics;

    constructor(params: EngineParams) {
        PIXI.settings.SCALE_MODE = params.scaleMode;
        
        this.loader = PIXI.Loader.shared;
        this.renderer = PIXI.autoDetectRenderer({
            width: params.canvasW,
            height: params.canvasH,
            antialias: true
        });
        this.stage = new PIXI.Container();
        this.graphics = new PIXI.Graphics();

        this.container = params.containerId ? document.getElementById(params.containerId) || document.body : document.body;
        this.container.appendChild(this.renderer.view);
    }
}