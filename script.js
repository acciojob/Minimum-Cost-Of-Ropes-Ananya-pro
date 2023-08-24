function compare(a, b){
	if(a < b){
		return -1;
	}
	else if(a > b){
		return 1;
	}
	else{
		return 0;
	}
}
function calculateMinCost() {
  //your code here
	let str=document.getElementById('rope-lengths').value.split(",");
	let arr=str.map((str)=>parseInt(str));
	let total=0;
	arr=arr.sort(compare);
	while(arr.length>=2){
		let sum=arr[0]+arr[1];
		let rem=[];
		rem.push(sum);
		for(let k=2;k<arr.length;k++){
			rem.pus(arr[k]);
		}
		rem=rem.sort(compare);
		arr=[...rem];
		total=total+sum;
	}
	console.log(total);
	let result=document.getElementById('result');
	result.innerHtml=total;
	
  
  
}  
