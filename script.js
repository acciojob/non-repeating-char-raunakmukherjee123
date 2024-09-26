


function firstNonRepeatedChar(str) {
 let map=new Map();
	for(let i=0;i<str.length;i++)
		{
			let ch=str.charAt(i);
			let freq=map.get(ch);
			if(freq===undefined)
			{
				map.set(ch,1);
			}
			else
			{
				map.set(ch,freq+1);
			}
		}
	for(let i=0;i<str.length;i++)
		{
			let ch=str.charAt(i);
			let freq=map.get(ch);
			if(freq==1)
			{
				return ch;
			}
		}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 


