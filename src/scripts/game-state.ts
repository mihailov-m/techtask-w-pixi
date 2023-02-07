export class GameState {
    private enemiesCount = 0;

    public setEnemiesCount(v: number) {
        this.enemiesCount = v;
    }

    public getEnemiesCount(): number {
        return this.enemiesCount;
    }
}