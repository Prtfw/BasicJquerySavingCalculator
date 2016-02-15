// function inside each event 
// end obj proprties with comma then add next
var formdata;

$(document).ready(
 	
 	
	function savinCalc(){
		
		function upddata(){
 			
 			formdata = {
			'goal': $('#savingGoal').val(),
			'month': $('#goalMonth').val(),
			'yr': $('#goalYear').val(),
			'amt':$('#savingAmount').val(),
			'curAmt':$('#currentAmount').val(),
			'monAmt':$('#monthlyAmount').val(),
		};
 	}
		//alert("loaded");

		$('#monthlyAmount').on("focusout", function() {
			//alert('input change');
			upddata();
	
				var res = calc(formdata);
				//console.log('*'+res)
				$('#res').text(res);
				
		})
		}
		
		

	// console.log('loaded');

	// $('form').submit(
	// 	function(){
	// 		//alert('formsub');
	// 	event.preventDefault();

	// 	console.log('form submitted');


		
	// 	// var goal=$('#savingGoal').val();
	// 	// var month=$('#goalMonth').val();
	// 	// var yr=$('#goalYear').val();
	// 	// var amt=$('#savingAmount').val();
	// 	// var curAmt=$('#currentAmount').val();
	// 	// var monAmt=$('#monthlyAmount').val();
		
	// 			// console.log(formdata.goal)
	// 			// console.log(formdata.month)
	// 			// console.log(formdata.yr)
	// 			// console.log(formdata.amt)
	// 			// console.log(formdata.curAmt)
	// 			// console.log(formdata.monAmt)

			  
 			
	// 			}
	// 	)
	



)

function calc(formdata){
	//alert("calc called");
	var today = new Date();
	var curMon = today.getMonth();
	var curYr = today.getYear();

	var month = 10; 
	var totSav = 0;
	var totSav = Number(month)*Number(formdata.monAmt) + Number(formdata.curAmt)

	var res;

	alert(month+ ' * ' +formdata.monAmt+' + ' + formdata.curAmt + ' = ' + totSav + ' vs. ' + formdata.amt);


	if (totSav < Number(formdata.amt)){
		res=false

	}
	else{res = true; }

	//res = true
	//alert(res);
return res
}

