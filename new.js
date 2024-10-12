console.log("Test 1 pass");

BABYLON.SceneLoader.ImportMesh("", "https://shubham1001010.github.io/game/", "house.obj", scene, function (meshes) {
                        var houseMaterial = new BABYLON.StandardMaterial("houseMaterial", scene);
                        houseMaterial.diffuseTexture = new BABYLON.Texture("https://shubham1001010.github.io/game/wood.jpg", scene);
                        meshes[i].material = houseMaterial;
                        meshes[i].checkCollisions = true ;
                        meshes[i].position = new BABYLON.Vector3(0,-9,0);
                    
            });
            
            var box1 = BABYLON.CreateBox("box", { size: 2 , 1 , 1});

    box1.material = new BABYLON.StandardMaterial("Mat");

    box1.material.diffuseTexture = new BABYLON.Texture("textures/crate.png");
    box1.material.diffuseTexture.hasAlpha = true;
    box1.position = new BABYLON.Vector3(5, -15, -10);

