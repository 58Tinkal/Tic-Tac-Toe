 let boxes=document.querySelectorAll(".box");
 let resetBtn=document.querySelector("#reset-btn");
  let newbtn=document.querySelector("#new");
  let msgc=document.querySelector(".msg-c");
  let msg=document.querySelector("#msg");
 let turnO=true;
   let count =0;
   const winPat=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
   ];

   const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgc.classList.add("hide");
   };
   boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       // console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        count++;
        box.disabled=true;
        checkWinner();
    });
   })

   const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
    };
    const enableBoxes = () =>{
        for(let box of boxes){
            box.disabled=false;
            box.innerText="";
        }
        };
    const showWinner=(w)=>{
        if(count===9){
           msg.innerText="Draw!,Click on new game";
           msgc.classList.remove("hide"); 
        }else{
        msg.innerText=`Congralution, Winner is ${w}`;
        msgc.classList.remove("hide");
        disableBoxes();}
    };
   const checkWinner=()=>{
     for(pattern of winPat){
        
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val!=""&&pos2Val!=""&&pos3Val!=""){
            if(pos1Val===pos2Val&&pos2Val===pos3Val){
                //console.log("winner",pos1Val);
                showWinner(pos1Val);
            }
        } else if(count===9){
            showWinner(pos1Val);
        }
       
     }
   };


   resetBtn.addEventListener("click",resetGame);
    newbtn.addEventListener("click",resetGame);
   