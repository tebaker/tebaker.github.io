var ENGINE = {}

ENGINE.Start = function (scene, renderer, camera, controls) {
    for(var i = 0; i < scene.children.length; i++) {
        if(scene.children[i].Start != null) {
            scene.children[i].Start();
        }
    }

    ENGINE.scene    = scene;
    ENGINE.renderer = renderer;
    ENGINE.camera   = camera;
    ENGINE.controls = controls;
}

ENGINE.Update = function () {
    for(var i = 0; i < ENGINE.scene.children.length; i++) {
        if(ENGINE.scene.children[i].Update != null) {
            ENGINE.scene.children[i].Update();
        }
    }

    ENGINE.controls.update();

    requestAnimationFrame(ENGINE.Update);
    ENGINE.renderer.render(ENGINE.scene, ENGINE.camera);
}
