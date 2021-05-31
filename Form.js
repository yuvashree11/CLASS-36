class Form{
    constructor(){}
    display(){
        var tittle = createElement('h1');
        tittle.html("CAR RACEING GAME");
        tittle.position(130,0);
        var input = createInput("name");
        input.position(130,160);
        var button = createButton("play");
        button.position(250,200);

        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playercount+=playercount;
            player.update(name);
            player.updatecount(playercount);
        })
    }


}