let currentPlayer="X";
let gameOver=false;

let gameBoard={
    board: [
        ["","",""],
        ["","",""],
        ["","",""]
    ],
};
 const win=document.getElementById("winner");
 const playername=document.getElementById("playername");
 const cellone=document.getElementById("cellone");
 const celltwo=document.getElementById("celltwo");
 const cellthree=document.getElementById("cellthree");
 const cellfour=document.getElementById("cellfour");
 const cellfive=document.getElementById("cellfive");
 const cellsix=document.getElementById("cellsix");
 const cellseven=document.getElementById("cellseven");
 const celleight=document.getElementById("celleight");
 const cellnine=document.getElementById("cellnine");



const playerOne={
    name: "Player One",
    marker: "X",
    
}

const playerTwo={
    name:"Player Two",
    marker:"O",

}
cellone.onclick=()=>{
    if(gameOver) return;
    let x=0;
    let y=0;
    if(gameBoard.board[x][y]!=="") return;
    cellone.textContent=currentPlayer;
    gameBoard.board[x][y]=currentPlayer;
    if(check()){
       gameOver=true;
        win.textContent=`${currentPlayer==="X" ? playerOne.name : playerTwo.name} won yay!`
    }
    
    currentPlayer=currentPlayer==="X"?"O":"X";
    playername.textContent=currentPlayer==="X"?`${playerOne.name} turn(X)`:`${playerTwo.name} turn(O)`;
}

celltwo.onclick=()=>{
    if(gameOver) return;
            let x=0;
            let y=1;
             if(gameBoard.board[x][y]!=="") return;
    celltwo.textContent=currentPlayer;
    gameBoard.board[x][y]=currentPlayer;
    if(check()){
         gameOver=true;
        win.textContent=`${currentPlayer==="X" ? playerOne.name : playerTwo.name} won yay!`;
    }
    
    currentPlayer=currentPlayer==="X"?"O":"X";
    playername.textContent=currentPlayer==="X"?`${playerOne.name} turn(X)`:`${playerTwo.name} turn(O)`;
 }


cellthree.onclick=()=>{
    if(gameOver) return;
            let x=0;
            let y=2;
         if(gameBoard.board[x][y]!=="") return;
    cellthree.textContent=currentPlayer;
    gameBoard.board[x][y]=currentPlayer;
    if(check()){
         gameOver=true;
        
        win.textContent=`${currentPlayer==="X" ? playerOne.name : playerTwo.name} won yay!`;
    }
    
    currentPlayer=currentPlayer==="X"?"O":"X";
    playername.textContent=currentPlayer==="X"?`${playerOne.name} turn(X)`:`${playerTwo.name} turn(O)`;   
 }

cellfour.onclick=()=>{
    if(gameOver) return;
            let x=1;
            let y=0;
         if(gameBoard.board[x][y]!=="") return;
    cellfour.textContent=currentPlayer;
    gameBoard.board[x][y]=currentPlayer;
    if(check()){
         gameOver=true;
       
        win.textContent=`${currentPlayer==="X" ? playerOne.name : playerTwo.name} won yay!`;
    }
    
    currentPlayer=currentPlayer==="X"?"O":"X";
    playername.textContent=currentPlayer==="X"?`${playerOne.name} turn(X)`:`${playerTwo.name} turn(O)`;   
 }


  cellfive.onclick=()=>{
    if(gameOver) return;
            let x=1;
            let y=1;
           if(gameBoard.board[x][y]!=="") return;
    cellfive.textContent=currentPlayer;
    gameBoard.board[x][y]=currentPlayer;
    if(check()){
         gameOver=true;
        
        win.textContent=`${currentPlayer==="X" ? playerOne.name : playerTwo.name} won yay!`;
    }
    
    currentPlayer=currentPlayer==="X"?"O":"X";
    playername.textContent=currentPlayer==="X"?`${playerOne.name} turn(X)`:`${playerTwo.name} turn(O)`;  
 }

cellsix.onclick=()=>{
    if(gameOver) return;
            let x=1;
            let y=2;
              if(gameBoard.board[x][y]!=="") return;
    cellsix.textContent=currentPlayer;
    gameBoard.board[x][y]=currentPlayer;
    if(check()){
         gameOver=true;
        win.textContent=`${currentPlayer==="X" ? playerOne.name : playerTwo.name} won yay!`;
    }
    
    currentPlayer=currentPlayer==="X"?"O":"X";
    playername.textContent=currentPlayer==="X"?`${playerOne.name} turn(X)`:`${playerTwo.name} turn(O)`; 
            
 }

cellseven.onclick=()=>{
    if(gameOver) return;
            let x=2;
            let y=0;
            if(gameBoard.board[x][y]!=="") return;
    cellseven.textContent=currentPlayer;
    gameBoard.board[x][y]=currentPlayer;
    if(check()){
         gameOver=true;
        win.textContent=`${currentPlayer==="X" ? playerOne.name : playerTwo.name} won yay!`;
    }
    
    currentPlayer=currentPlayer==="X"?"O":"X";
    playername.textContent=currentPlayer==="X"?`${playerOne.name} turn(X)`:`${playerTwo.name} turn(O)`; 
          
 }
celleight.onclick=()=>{
    if(gameOver) return;
            let x=2;
            let y=1;
             if(gameBoard.board[x][y]!=="") return;
    celleight.textContent=currentPlayer;
    gameBoard.board[x][y]=currentPlayer;
    if(check()){
         gameOver=true;
        win.textContent=`${currentPlayer==="X" ? playerOne.name : playerTwo.name} won yay!`;
    }
    
    currentPlayer=currentPlayer==="X"?"O":"X";
    playername.textContent=currentPlayer==="X"?`${playerOne.name} turn(X)`:`${playerTwo.name} turn(O)`; 
          
 }
  cellnine.onclick=()=>{
    if(gameOver) return;
            let x=2;
            let y=2;
            if(gameBoard.board[x][y]!=="") return;
    cellnine.textContent=currentPlayer;
    gameBoard.board[x][y]=currentPlayer;
    if(check()){
        gameOver=true;
        win.textContent=`${currentPlayer==="X" ? playerOne.name : playerTwo.name} won yay!`;
    }
    
    currentPlayer=currentPlayer==="X"?"O":"X";
    playername.textContent=currentPlayer==="X"?`${playerOne.name} turn(X)`:`${playerTwo.name} turn(O)`; 
           
 }



    
   


function check(){
     //checking diagonal
    if(gameBoard.board[0][0]==gameBoard.board[1][1] && gameBoard.board[1][1]==gameBoard.board[2][2] && gameBoard.board[0][0]!=""){
        return 1;
    }
    //checking horizontal
    for(let i=0;i<3;i++){
        
            
            let mark=gameBoard.board[i][0];
            if(mark==gameBoard.board[i][1] && mark!=""){
                if(mark==gameBoard.board[i][2]){
                    
                    return 1;
                    
                }
                
            }
           
            
            
        
    }

    //checking vertical
     for(let j=0;j<3;j++){
        for(let i=0;i<3;i++){
            
            let mark=gameBoard.board[0][j];
            if(mark==gameBoard.board[1][j] && mark!=""){
                if(mark==gameBoard.board[2][j]){
                    
                    return 1;
                    
                }
                
            }
            
            
        }
    }
   

    //checking anti diagonal
    if(gameBoard.board[0][2]==gameBoard.board[1][1] && gameBoard.board[1][1]==gameBoard.board[2][0] && gameBoard.board[0][2]!=""){
        return 1;
    }
    
    
    return 0;

    
}

  