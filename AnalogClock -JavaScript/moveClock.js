function showTime()
{
	const time=new Date();
	var hours=time.getHours();//0-23 Hours Format
	var mins=time.getMinutes();//0-59 minutes
	var secs=time.getSeconds();//0-59 seconds
	if(hours>12)
	{
		hours=hours-12;

	}
	hours=hours<10? "0"+hours:hours;
	mins=mins<10? "0"+mins:mins;
	secs=secs<10? "0"+secs:secs;

	const currentTime=hours+":"+mins+":"+secs;
	
	document.getElementById("ClockFace").innerText=currentTime;
	setTimeout(showTime,1000);
}
	showTime();