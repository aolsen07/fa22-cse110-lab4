let callback = function() {
    let d = new Date();
    let time = d.toLocaleDateString();
    console.log(time);
}

for (let i = 0; i < 1; i++) {
    setInterval(callback, 1000);
}