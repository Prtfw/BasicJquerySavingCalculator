// function inside each event 
// end obj proprties with comma then add next
var formdata;
var monthConv = {};

	monthConv = {
								'Jan': 0,
								'Feb': 1,
								'Mar': 2,
								'Apr': 3,
								'May': 4,
								'Jun': 5,
								'Jul': 6,
								'Aug': 7,
								'Sept': 8,
								'Oct': 9,
								'Nov': 10,
								'Dec': 22,
	};


$(document).ready(
 	
 	
	function savinCalc(){
		
		function upddata(){
			alert('update data called')
 			
 			formdata = {
			'goal': $('#savingGoal').val(),
			'month': $('#goalMonth').val(),
			'yr': $('#goalYear').val(),
			'amt':$('#savingAmount').val(),
			'curAmt':$('#currentAmount').val(),
			'monAmt':$('#monthlyAmount').val(),
			
		};
						//alert(formdata.month)
						//console.log(formdata)
			return formdata
 	}
		//alert("loaded");

		$('#monthlyAmount').on("focusout", function() {
			alert('input change');
		 var formdata =	upddata();
		 		console.log('backfrom updatedata');
				console.log('main form data: ' + formdata);
			//	alert(monthConv.formdata.month);
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
	



);

function calc(formdata){
	console.log("calc called");
	//alert(monthConv.formdata.month);
	
	var goalDate= new Date(Number(formdata.yr), monthConv.formdata.month, 0);
	var today = new Date();
	var curMon = today.getMonth();
	var curYr = today.getYear();
	alert(goalDate + " vs " + today);
	var month = goalDate-today
	alert(month)
	
	
	var month = 10; 
	var totSav = 0;
	var totSav = Number(month)*Number(formdata.monAmt) + Number(formdata.curAmt)

	var res;

	//alert(month+ ' * ' +formdata.monAmt+' + ' + formdata.curAmt + ' = ' + totSav + ' vs. ' + formdata.amt);
	

	if (totSav < Number(formdata.amt)){
		res=false

	}
	else{res = true; }

	//res = true
	//alert(res);
return res
}

