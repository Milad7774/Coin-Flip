const button = $(".button");
const images = $(".images");
const shadow = $(".shadow");
const result = $(".result");


function remove(){
    images.css("animation", "");
    shadow.css("animation" , "");
}

function changeImagesT(){
    images.attr("src" , "resources/tails.svg");
}

function changeImagesH(){
    images.attr("src" , "resources/heads.svg");
}
function changeToResult(){

    const number = Math.floor(Math.random() * 10);

    if(number % 2 == 0){
        images.attr("src" , "resources/heads.svg");
        result.text("Heads");
    }
    else{
        images.attr("src" , "resources/tails.svg");
        result.text("Tails")
    }
    console.log(number);
}


function FlipCoin() {

    images.css("animation", "flipped 0.8s linear 1 forwards");

    shadow.css("animation", "flippedShadow 0.8s linear 1");


    setTimeout(remove, 800);

    if(images.attr("src") == "resources/heads.svg"){
    setTimeout(changeImagesT, 200);

    setTimeout(changeToResult, 600);
    }
    else{
        setTimeout(changeImagesH, 200);

        setTimeout(changeToResult, 600);
    }
}