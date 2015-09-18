function normalize(arr)
{
    return arr.map(
    	function(name)
    	{
    		return name.toLowerCase().split('').reduce(
    			function(a,b)
    			{
	    			if(a.length==1)
	    			{
	    				return a.toUpperCase() + b;
	    			}
	    			else 
	    			{
	    				return a + b
	    			}
	    		}
    		)
    	})
}
    			 	
console.log(normalize(['adam', 'LISA', 'barT']))

function get_primes(arr) 
{
	return arr.filter(function(n){
			if(n <= 1){return false}
			var temp = arr.filter(function(a){return a > 1 && a < n})
			return temp.every(function(x){return (n % x !=0)})
		})
}
var arr = [];
for (let x = 1; x < 100; x++) {
    arr.push(x);
}
console.log(get_primes(arr));