
const THREE = window.THREE;

class MyModule {
    constructor() {
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({color: 0x008888});
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(0, 1, 7);
        const scene = new THREE.Scene();
        scene.add(cube);

        this.cube = cube;
        this.scene = scene;
    }

    getScene() { return this.scene; }

    updateScene() {
        const pos = this.cube.position;
        if (pos.y > 4) {
            pos.y = 0;
        } else {
            pos.y += 0.1;
        }
    }
}

export default MyModule;
