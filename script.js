



function initiate() {
    var sdboard = [[]]
    var j = 0
    for (var i = 1; i <= 81; i++){
        const val = document.getElementById(String(i)).value
        if (val == ""){
            sdboard[j].push(0)
        }
        else { 
            sdboard[j].push(Number(val))
        }
        if (i % 9 == 0 && i < 81){
            sdboard.push([])
            j++
        }
    }
    let check=0;
   
    for(var i=0;i<9;i++){
        var count1=[0,0,0,0,0,0,0,0,0];
        for(var j=0;j<9;j++){
            if(sdboard[i][j]>0){
                count1[sdboard[i][j]-1]++;
                if(count1[sdboard[i][j]-1]>1){
                    check=1;
                    break;
                }
            }
            
        }
        
    }
    for(var i=0;i<9;i++){
        var count1=[0,0,0,0,0,0,0,0,0];
        for(var j=0;j<9;j++){
            if(sdboard[j][i]>0){
                count1[sdboard[j][i]-1]++;
                if(count1[sdboard[j][i]-1]>1){
                    check=1;
                    break;
                }
            }
           
        }
        
    }
    answer(sdboard,check);
     
   


     


}

function isSafe(row,col,sdboard,val){
    for(let i=0;i<9;i++){
        if(sdboard[row][i]==val){
            return false;
        }
         if(sdboard[i][col]==val){
            return false;
        }
        if(sdboard[3*(Math.floor(row/3))+Math.floor(i/3)][3*(Math.floor(col/3))+i%3]==val){
            return false;
        }
    }
    return true;
}
 function help(sdboard){

    for(let row=0;row<9;row++){

        for(let col=0;col<9;col++){
            
            if(sdboard[row][col]==0){
                for(let val=1;val<=9;val++){
                     if(isSafe(row,col,sdboard,val)){
                         sdboard[row][col]=val;
                         nextsol=help(sdboard);
                         if(nextsol){
                             return true;
                         }
                         else{
                             sdboard[row][col]=0;
                         }
                     }
                }
                return false;

            }
           
          
        }
    }
    return true; 

 }
 function answer(sdboard,check){
    if(check==0){
        let z=help(sdboard);
 if(z==1){
     for (var i = 1; i <= 9; i++){
         var row = ""
         for (var j = 0; j < 9; j++){
             if (row == ""){
                 row = row + String(sdboard[i - 1][j])
             }
             else {
                 row = row + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + String(sdboard[i - 1][j])
             }
         }
         document.getElementById("row " + String(i)).innerHTML = row
     }
 }
 else{
    alert("invalid sudoko");
    for (var i = 1; i <= 9; i++){
        var row = ""
        for (var j = 0; j < 9; j++){
            if (row == ""){
                row = row + String("0")
            }
            else {
                row = row + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + String("0");
            }
        }
        document.getElementById("row " + String(i)).innerHTML = row
    }
 }
    }
    else{
        alert("invalid sudoko");
        for (var i = 1; i <= 9; i++){
            var row = ""
            for (var j = 0; j < 9; j++){
                if (row == ""){
                    row = row + String("0")
                }
                else {
                    row = row + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + String("0");
                }
            }
            document.getElementById("row " + String(i)).innerHTML = row
        }
    }

   
 }
 