 
function compare(a, b) {
  if (a < b) {
      return -1;
  } else if (a > b) {
      return 1;
  } else {
      return 0;
  }
}
 
 
 

  //your code here
  function calculateMinCost() {
  let ans = 0,
    arr = document
      .getElementById("rope-lengths")
      .value.split(",")
      .map((val) => parseInt(val));
  while (arr.length > 1) {
    arr.sort((a, b) => a - b);
    arr[1] += arr[0];
    ans += arr[1];
    arr.shift();
  }
  document.getElementById("result").innerText = ans;
}
let result=document.getElementById('result');
result.innerHTML=total;
}  
  rem.push(sum);
  for(let k=2;k<arr.length;k++){
    rem.push(arr[k]);
  }
  rem=rem.sort(compare);
  // console.log("rem ",rem);
  arr=[...rem];
  // console.log("arr ",arr);
  total=total+sum;
  // console.log("total "+total+"----------------------");
}
console.log(total);
 
 
let result=document.getElementById('result');
result.innerHTML=total;
}  