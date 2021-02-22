let scene, camera, renderer, cube, geometry, shiba;

    function init() {
      scene = new THREE.Scene();
      //Add meshes here
      const assetPath = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/2666677/';  

      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      camera.position.z = 1;
  
      controls = new THREE.OrbitControls(camera, renderer.domElement)
      let loader = new THREE.GLTFLoader();
      let dog = loader.load("./shiba/scene.gltf", function (gltf) {
        scene.add(gltf.scene);
        shiba = gltf.scene.children[0];
        //animate();
      });
    };
    
    function ambientLight() {
      const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.8)
      scene.add(ambientLight)
    }

    function animate() {
      //cube.rotation.x += 0.01;
      //cube.rotation.y += 0.005;
      b_ground.rotation.x += 0.01
    };

    // function render() {
    //   renderer.render(scene, camera);
    // }
    function Go() {
      requestAnimationFrame(Go);
      //animate();
      //render();
      renderer.render(scene, camera);
    };
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }; 

    init();
    Go()
    window.addEventListener('resize', onWindowResize)
    //window.addEventListener('load', pageFullyLoaded, false)
    setTimeout(function(){createTexture(geometry, 0x44aa88, 0)}, 5000)
    // Promise.all([init()])
    //       .then(function(){Go()})
    //       .then(function(){createTexture(geometry, 0x44aa88, 0)})
          
    