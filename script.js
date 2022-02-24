
var moves = [null,null,null,null,null,null,null,null,null,];

player = 0;

var wins = [
    [0,1,2], //pionowa
    [3,4,5], //pionowa
    [6,7,8], //pionowa
    [0,3,6], //pionowa
    [1,4,7], //pionowa
    [2,5,8], //pionowa
    [0,4,8], //skośna
    [2,4,6], //skośna
]


function move(event) {
    console.log(event.target);
    
    if(checkWin()) {
        restart();
        return;
    }
    
    var id = event.target.id;
    if (event.target.id) {
        if (player === 0 && !moves[id]) {
            moves[id] = 'X';
            document.getElementById(id).style.backgroundImage="url('PikPng.com_circle-frame-png_342071.png')";
            player = 1;
            var iswin = checkWin();
            if (iswin)
            alert("WIN");
            return;
            } 
        if (player === 1 && !moves[id]) {
            moves[id] = 'O';
            document.getElementById(id).style.backgroundImage="url('favpng_x-mark-check-mark-cross-sign-clip-art.png')";
            player = 0;
            var iswin = checkWin();
            if (iswin)
            alert("WIN");
            return;
       }
    }
}
function checkWin(){
    const result = wins.find((win) => {
        if (
            moves[win[0]] !== null &&
            moves[win[0]] === moves[win[1]] &&
            moves[win[1]] === moves[win[2]]
        )
         return true;
        else return false;
    });
    if(result !== undefined) return true;
    else return false;
}
var tura = 1;
function restart() {
    console.log("restart")
    moves = [null,null,null,null,null,null,null,null,null];
    playactive = true;
    tura += 1
    document.getElementById("Status").innerHTML = "";
    for (i = 0; i <= 8; i ++) {
        document.getElementById(i).style.backgroundImage = "";
        document.getElementById(i).style.backgroundColor = "rgba(186, 186, 186, 0.4)";
    }
    
}