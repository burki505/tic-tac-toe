

export const GameWinner = (allDecisions) => {

  
      for(let i =0; i < allDecisions.length; i++){


          if(allDecisions[0].decision === "X" && allDecisions[1].decision === "X" && allDecisions[2].decision === "X"){
            return "X";
          }
          else if(allDecisions[0].decision === "X" && allDecisions[4].decision === "X" && allDecisions[8].decision === "X"){
            return "X";
          }
          else if(allDecisions[0].decision === "X" && allDecisions[3].decision === "X" && allDecisions[6].decision === "X"){
            return "X";
          }
          else if(allDecisions[1].decision === "X" && allDecisions[4].decision === "X" && allDecisions[7].decision === "X"){
            return "X";
          }
          else if(allDecisions[2].decision === "X" && allDecisions[5].decision === "X" && allDecisions[8].decision === "X"){
            return "X";
          }
          else if(allDecisions[2].decision === "X" && allDecisions[4].decision === "X" && allDecisions[6].decision === "X"){
            return "X";
          }
          else if(allDecisions[3].decision === "X" && allDecisions[4].decision === "X" && allDecisions[5].decision === "X"){
            return "X";
          }
          else if(allDecisions[6].decision === "X" && allDecisions[7].decision === "X" && allDecisions[8].decision === "X"){
            return "X";
          }
          else if(allDecisions[0].decision === "O" && allDecisions[1].decision === "O" && allDecisions[2].decision === "O"){
              return "O";
            }
            else if(allDecisions[0].decision === "O" && allDecisions[4].decision === "O" && allDecisions[8].decision === "O"){
              return "O";
            }
            else if(allDecisions[0].decision === "O" && allDecisions[3].decision === "O" && allDecisions[6].decision === "O"){
              return "O";
            }
            else if(allDecisions[1].decision === "O" && allDecisions[4].decision === "O" && allDecisions[7].decision === "O"){
              return "O";
            }
            else if(allDecisions[2].decision === "O" && allDecisions[5].decision === "O" && allDecisions[8].decision === "O"){
              return "O";
            }
            else if(allDecisions[2].decision === "O" && allDecisions[4].decision === "O" && allDecisions[6].decision === "O"){
              return "O";
            }
            else if(allDecisions[3].decision === "O" && allDecisions[4].decision === "O" && allDecisions[5].decision === "O"){
              return "O";
            }
            else if(allDecisions[6].decision === "O" && allDecisions[7].decision === "O" && allDecisions[8].decision === "O"){
              return "O";
            }
        
            

            return null;
            
   
  
        
          
      }
    

  
}