var one = 0;
var two = 0;
var three = 0;

function Reuse()
{
	document.getElementById("one").style.display = "";
	document.getElementById("garden").style.display = "none";
	document.getElementById("trash").style.display = "none";
	document.getElementById("reuse").style.width = "92%";
	document.getElementById("reuse").style.backgroundImage = "url('background.jpg')";
}

function Garden()
{
	document.getElementById("two").style.display = "";
	document.getElementById("reuse").style.display = "none";
	document.getElementById("trash").style.display = "none";
	document.getElementById("garden").style.width = "92%";
	document.getElementById("garden").style.backgroundImage = "url('background.jpg')";
}

function Trash()
{
	document.getElementById("three").style.display = "";
	document.getElementById("garden").style.display = "none";
	document.getElementById("reuse").style.display = "none";
	document.getElementById("trash").style.width = "92%";
	document.getElementById("trash").style.backgroundImage = "url('background.jpg')";
}

function One()
{
	if (one == 0)
	{
		one = 1;
		document.getElementById("one1").style.visibility = "";
	}
	else if (one == 1)
	{
		one = 2;
		document.getElementById("one2").style.visibility = "";
	}
	else if (one == 2)
	{
		one = 3;
		document.getElementById("one3").style.visibility = "";
	}
	else if (one == 3)
	{
		one = 4;
		document.getElementById("one4").style.visibility = "";
	}
	else if (one == 4)
	{
		location.reload();
	}
}

function Two()
{
	if (two == 0)
	{
		two = 1;
		document.getElementById("two1").style.visibility = "";
	}
	else if (two == 1)
	{
		two = 2;
		document.getElementById("two2").style.visibility = "";
	}
	else if (two == 2)
	{
		two = 3;
		document.getElementById("two3").style.visibility = "";
	}
	else if (two == 3)
	{
		two = 4;
		document.getElementById("two4").style.visibility = "";
	}
	else if (two == 4)
	{
		location.reload();
	}
}

function Three()
{
	if (three == 0)
	{
		three = 1;
		document.getElementById("three1").style.visibility = "";
	}
	else if (three == 1)
	{
		three = 2;
		document.getElementById("three2").style.visibility = "";
	}
	else if (three == 2)
	{
		three = 3;
		document.getElementById("three3").style.visibility = "";
	}
	else if (three == 3)
	{
		three = 4;
		document.getElementById("three4").style.visibility = "";
	}
	else if (three == 4)
	{
		location.reload();
	}
}