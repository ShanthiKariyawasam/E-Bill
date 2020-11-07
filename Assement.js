function CalculateBill()
{
	let payment;
	let uprice1=7.85;
	let uprice2=7.85;
	let uprice3=10;
	let uprice4=27.75;
	let uprice5=32;

	let Units=document.getElementById('Units').value;
	if(Units<=30)
	{
		payment=uprice1*Units;
	}
	else if(Units>=31 && Units<=60)
	{
		payment=(uprice1*30)+(uprice2*(Units-30));
	}
	else if(Units>=61 && Units<=90)
	{
		payment=(uprice1*30)+(uprice2*30)+(uprice3*(Units-60));
	}
	else if(Units>=91 && Units<=120)
	{
		payment=(uprice1*30)+(uprice2*30)+(uprice3*30)+(uprice4*(Units-90));
	}
	else
	{
		payment=(uprice1*30)+(uprice2*30)+(uprice3*30)+(uprice4*30)+(uprice5*(Units-120));
	}

		let paymentO=(payment.toFixed(2));
	
	
	document.getElementById("TAmount").innerHTML="Your Bill Amount is: Rs."+paymentO;
}