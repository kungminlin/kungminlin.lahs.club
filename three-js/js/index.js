var scene = new THREE.Scene();
scene.background = new THREE.Color("#fff");
scene.fog = new THREE.Fog("#fff", 1, 10);

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.getElementById("renderer").appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshStandardMaterial( { color: 0x4286f4, roughness: 0, metalness: 0 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );
cube.castShadow = true;

var plane = new THREE.Mesh(
					new THREE.PlaneBufferGeometry( 40, 40 ),
					new THREE.MeshPhongMaterial( { color: 0xaaaaaa, specular: 0x101010 } )
				);
plane.rotation.x = - Math.PI / 2;
plane.position.y = - 0.5;
scene.add( plane );
plane.receiveShadow = true;

var directionalLight = new THREE.DirectionalLight( 0xffffff );
directionalLight.position.set(1, 1, 1).normalize();
directionalLight.castShadow = true;
var ambientLight = new THREE.AmbientLight( 0xffffff, 0.6 );

scene.add( directionalLight );
scene.add( ambientLight );

camera.position.set(0, 3, 5);
var controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.minDistance = 3.5;
controls.maxDistance = 7;
controls.maxPolarAngle = 2 * Math.PI / 5;

function animate() {
	requestAnimationFrame( animate );

  // cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();
