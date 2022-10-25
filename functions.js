/*js file for inclass website - Tori Thompson*/

function todaysDate()
{
var rightNow2 =  new Date();
var theMonth = 0, todaysDate = "", monthNumber;
monthNumber = rightNow2.getMonth() + 1;
theMonth = getMonthName(monthNumber);
todaysDate = theMonth + ' ' + rightNow2.getDate() 
		   + ', ' + rightNow2.getFullYear();
document.getElementById("currentDate").innerHTML = todaysDate;	
}

function getMonthName(month)
{
	switch(month)
	{
		case 1:  mName="January"; break;
		case 2:  mName="February"; break;	
		case 3:  mName="March"; break;
		case 4:  mName="April"; break;
		case 5:  mName="May"; break;
		case 6:  mName="June"; break;
		case 7:  mName="July"; break;
		case 8:  mName="August"; break;	
		case 9:  mName="September"; break;
		case 10: mName="October"; break;	
		case 11: mName="November"; break;	
		case 12: mName="December"; break;				
	}
	return(mName);
}

function differentTable() 
{
	document.getElementById("tableChange").style.borderWidth = "0.2em";
	document.getElementById("tableChange").style.borderStyle = "dashed";
	document.getElementById("tableChange").style.borderColor = "green";
	document.getElementById("tableChange").style.color = "blue";

}
function jumpToTop()
{
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0
}