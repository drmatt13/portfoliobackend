const data = [

// card ----------------------------------------------------- >
[
//html
[
{'html': `<div class="image-container">
  <img src="https://i.pinimg.com/originals/3b/15/78/3b1578e7da21d44724450f8018582fff.jpg">
</div>

<div class="image-container">
  <img src="https://i.pinimg.com/originals/3b/15/78/3b1578e7da21d44724450f8018582fff.jpg">
</div>

<div class="image-container">
  <img src="https://i.pinimg.com/originals/3b/15/78/3b1578e7da21d44724450f8018582fff.jpg">
</div>

<div class="image-container">
  <img src="https://i.pinimg.com/originals/3b/15/78/3b1578e7da21d44724450f8018582fff.jpg">
</div>`}
],
//css
[
{'css': `* { padding: 0; margin: 0; box-sizing: border-box; }

body { background-color: darkslategrey; min-height: 100vh; width: 100%; }

.image-container {
  background-color: #FFF5;
  margin: 50px auto;
  height: 50%;
  width: 50%;
  position: relative;
}

.image-container img {
  height: 250px;
  width: 100%;
  display: block;
}

.image-container:nth-of-type(1) img {
  object-fit: cover;
}

.image-container:nth-of-type(2) img {
  object-fit: contain;
  object-position: left;
}

.image-container:nth-of-type(3) img {
  object-fit: contain;
  object-position: 50% 0;
}`}
],
//js
[],
// output
[],
//render
{'render': true}
],


// card ----------------------------------------------------- >
[
//html
[
{'html': `<div class="image-container"></div>`}
],
//css
[
{'css': `* { padding: 0; margin: 0; }

body { height: 100vh; width: 100vw; display: flex; align-items: center; justify-content: center; }

.image-container {
  height: 80%;
  width: 80%;
  background-image: url("https://i.pinimg.com/originals/3b/15/78/3b1578e7da21d44724450f8018582fff.jpg");
  background-size: cover;
  /* background-position: center; top, bottom, left.. */
  /* clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%); */
}`}
],
//js
[],
// output
[],
//render
{'render': true}
],

];

module.exports = data;