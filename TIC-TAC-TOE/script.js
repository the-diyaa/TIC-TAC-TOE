let boxes = document.querySelectorAll(".box");
let rstbtn = document.querySelector("#rst");
let newGameBtn = document.querySelector("#new-btn");
let msg_container = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
    turnO = true;
    enableBox();
    msg_container.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        console.log("clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = "true";

        checkWinner();
    });
});

const disableBox = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBox = () => {
    for(box of boxes){
        box.disabled = false;
    box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msg_container.classList.remove("hide");
    disableBox();
}

const checkWinner = () =>{
    for(let pattern of winPattern){
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val===pos2Val && pos2Val===pos3Val){
            console.log("winner",pos1Val);
            showWinner(pos1Val);
        }
    }
}
};

newGameBtn.addEventListener("click" , resetGame);
rstbtn.addEventListener("click", resetGame);