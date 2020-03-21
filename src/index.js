
// You should implement your task here.

module.exports = function towelSort (matrix) {
if (matrix==null){ return [];}

var nn =[];
var tm=[];

for (i=0;i<matrix.length; i++){
  
  if (i % 2 != 0) {
    tm=[];
      for (k = matrix[i].length - 1; k >= 0; k--) {
      tm.push(matrix[i][k]);
      
    }  
    
    

  } 
  else {
    for (k = 0; k < matrix[i].length; k++) {
      tm.push(matrix[i][k]);
  }
  }
  for (j=0;j<tm.length; j++){
   nn.push(tm[j]);
   
}
tm=[];

}
return nn;
}
