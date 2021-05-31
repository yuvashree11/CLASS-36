class Player {
    constructor(){}
    getcount(){
        var playerref = database.ref("playercount");
        playerref.on("value",function(data){
            playercount = data.val();

        })

    }
updatecount(count){
    datebase.ref('/').update({
        playercount : count
    })

}
update(name){
    var playername = "player"+playercount
    database.ref(playername).set({
        name:name
    })
}
}