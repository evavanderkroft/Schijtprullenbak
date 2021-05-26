function rotatePlastic(){
    const url = 'http://localhost:3000/rotatePlastic';
    fetch(url)
    .then(console.log("rotate 90"))
}

function rotateRestafval(){
    const url = 'http://localhost:3000/rotateRestafval';
    fetch(url)
    .then(console.log("Rotate 90"))
}

function rotatePapier(){
    const url = 'http://localhost:3000/rotatePapier';
    fetch(url)
    .then(console.log("Rotate 0"))
}

