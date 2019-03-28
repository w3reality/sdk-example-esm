
import MyModule from './mymodule-esm.js';

const SDK = window.requirejs('w3reality-sdk');

class App extends SDK.App {
    // override
    static createWorld() {
        const world = SDK.App.createWorld();
        world.setSpawnPose([4.0, 1.5, 8, -Math.PI/16, -Math.PI/2, 0]);
        return world;
    }

    // override
    constructor(data, name="esm") {
        super(data, name);

        const mm = new MyModule();
        this.mm = mm;

        this.setScene(mm.getScene());
    }

    // override
    update() {
        super.update();

        this.mm.updateScene();
    }

    // override
    free() {
        super.free();
    }
}

export default App;
