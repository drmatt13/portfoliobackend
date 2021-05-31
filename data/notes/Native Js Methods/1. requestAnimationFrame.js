// replace `${i}` --> \`   \$   {i}   \`

let data = [

// card ----------------------------------------------------- >
[
//html
[
{'html': `<button id="start-btn">start</button>
<button id="end-btn">end</button>
<div id="container"></div>`}
],
//css
[
{'css': `* { padding: 0; margin: 0; box-sizing: border-box; }

body { background-color: darkslategrey; min-height: 100vh; width: 100%; }

#start-btn { position: absolute; padding: 10px; top: 20px; left: 20px}

#end-btn { position: absolute; padding: 10px; top: 20px; left: 100px}

#container div {
  height: 50px;
  width: 10px;
  background-color: orange;
  float: left;
}`}
],
//js
[
{'js': `let animation;

const addDiv = () => {
  const div = document.createElement("div");
  document.getElementById("container").appendChild(div);
  animation = requestAnimationFrame(addDiv);
}

document.getElementById("start-btn").addEventListener("click", () => {
  animation = requestAnimationFrame(addDiv);
});

document.getElementById("end-btn").addEventListener("click", () => {
  cancelAnimationFrame(animation);
});`}
],
// output
[],
//render
{'render': true}
],

// card ----------------------------------------------------- >
[
//html
[],
//css
[],
//js
[],
// output
[],
//render
{'render': false}
],

];

module.exports = data;