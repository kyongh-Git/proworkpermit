$(function() {
$("#submit_form").click(function(e){
var CWID=$("#element_1").val();
var lastName= $("#element_2_2").val();
var firstName=$("#element_2_1").val();
//local address
var addr_street=$("#element_3_1").val();
var addr_streettwo=$("#element_3_2").val();
var addr_city=$("#element_3_3").val();
var addr_state=$("#element_3_4").val();
var addr_zip=$("#element_3_5").val();
var addr_country=$("#element_3_6").val();
var full_address=addr_street+"^"+addr_streettwo+"^"+addr_city+"^"+addr_state+"^"+addr_zip+"^"+addr_country;

var phone=$("#element_16").val();

var first_dd=$("#element_12_2").val();
var first_mm=$("#element_12_1").val();
var first_yy=$("#element_12_3").val();
var firstEntry=first_mm+"/"+first_dd+"/"+first_yy;

//var doemm=$("#element_22_1").val();
//var doedd=$("#element_22_2").val();
//var doey=$("#element_22_3").val();


var position=$("input[name='element_5']:checked").val();
var position_value;
if(position=="4")
{
	position_value=position;
	//position_value="Faculty";
}
else if(position=="5")
{
	position_value=position;
	//position_value="PostDoc/Researcher";
}
else if(position=="6")
{
	position_value=position;
	//position_value="Staff";
}
else
{
	position_value=$("#element_17").val();
}

var app_sig=$("#element_8").val();
var coc=$("#element_13").val();
var cor=$("#element_14").val();

var today_dd=$("#element_9_1").val();
var today_mm=$("#element_9_2").val();
var today_yy=$("#element_9_3").val();
var today=today_mm+"/"+today_dd+"/"+today_yy;

var querystring ="&CWID="+CWID+"&ln="+lastName+"&fn="+firstName+"&fa="+full_address+"&ph="+phone+"&fe="+firstEntry+"&pov="+position_value+"&sig="+app_sig+"&coc="+coc+"&cor="+cor+"&today="+today;
var url = "https://okstate.forms-db.com/view.php?id=702651"+querystring;
$("#element_15").val(url);
});
});