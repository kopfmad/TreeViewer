//Variáveis globais
// 0xA1BF73 - verde do fundo
var container3d = document.querySelector(".tresd-3d");


var scene = new THREE.Scene();   //Cria a cena
scene.background = new THREE.Color(0xffffff);  //Muda a cor do fundo
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
); //Cria a camera, com o field of view, o aspect ratio, o min clipping e max clipping
camera.position.z = 55;  //posiciona a camera um pouco afastado do (0,0,0)
var renderer = new THREE.WebGLRenderer();  //cria o renderizador
renderer.setSize(700,600);  //ajusta o tamanho do renderizador
 
container3d.appendChild(renderer.domElement);  //adiciona o renderizador como elemento da DOM
 
var light = new THREE.DirectionalLight(0xffffff);
scene.add(light);

var light2 = new THREE.DirectionalLight(0x22ff22);
light2.position.y=-10;
scene.add(light2);

var controls = new THREE.OrbitControls(camera);
controls.addEventListener("change", renderer);    

var loader = new THREE.GLTFLoader();
loader.load("../resources/gltf/tree.gltf", function (gltf) {
  obj = gltf.scene;  //talvez usar .children[i] para escolher o elemento i
  obj.scale.set(5,3,5);  //set ou sem set? Fazer o teste
  obj.position.y=-25;
  scene.add(gltf.scene);
});


var animate = function() {
    requestAnimationFrame(animate); //Isso vai pedir o animation frame todo frame e re-executar a propria funcao.
    renderer.render(scene,camera);  //Da o F12 na tela, renderizando o que a camera ve dentro da cena.
};





animate();


