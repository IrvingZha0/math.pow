function pow(base,exponent)
{
	let n=base;
	if(exponent>0){
		for(let i=1;i<exponent;++i)
		n*=base;
		return n;
	}
	else if(exponent === 0){
		return 1;
	}
	if(exponent<0){
		for(let i=1;i<-exponent;++i)
		n*=base;
		return 1/n;
	}
}
console.log(pow(2,3))
console.log(pow(2,0))
console.log(pow(2,-4))
