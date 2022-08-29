function a(){return Math.floor(Math.random()*360)}
function b(z,y){return`hsla(${z},70%,80%,${y})`}
function c(z,y){z.style.setProperty("--a",b(y,1))
z.style.setProperty("--b",b(y,0.5))}
onload=()=>{[...document.getElementsByTagName("button")].forEach(z=>c(z,a()));[...document.getElementsByTagName("input")].forEach(z=>c(z,a()));[...document.getElementsByTagName("a")].forEach(z=>c(z,a()))}