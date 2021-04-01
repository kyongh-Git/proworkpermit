$(function() {
	GetParameterValues();
function GetParameterValues() { 
//get the URL   
var url = window.location.href.slice(window.location.href.indexOf('?') +1).split('&');
//var url_org = "id=702651&CWID=A11746276&ln=Kim&fn=Yonghwan&fa=71S%20University%20Apartment^^Stillwater^Oklahoma^74075^United%20States&ph=798-789-7894&fe=3/2/2021&pov=PostDoc/Researcher&sig=Oklahoma&coc=United%20States&cor=Oklahoma&today=24/2/2021";
//var url = url_org.split('&');
var urlparam = String(url).split('=');

//CWID
var arr = urlparam[2].split(",");
var vs=arr[0];
if(vs="emp")
{
	$("#element_1").val("");
}
else
{
	$("#element_1").val(vs);
}

//last name
arr = urlparam[3].split(",");
vs=arr[0];
$("#element_2_2").val(vs);

//first name
arr = urlparam[4].split(",");
vs=arr[0];
$("#element_2_1").val(vs);

//address
arr = urlparam[5].split(",");
vs=arr[0];
vvs=vs.split("+");
var vadr1=vvs[0].replaceAll("%20", " ");
var vadr2=vvs[1].replaceAll("%20", " ");
var vcity=vvs[2].replaceAll("%20", " ");
var vstate=vvs[3].replaceAll("%20", " ");
var vzip=vvs[4].replaceAll("%20", " ");
var vcount=vvs[5].replaceAll("%20", " ");
var vfulladd;
//if adr2 is empty
if(vadr2 == "")
{
    vfulladd = vadr1 + ", " + vcity + ", " + vstate+ ", " + vzip + ", " + vcount;
}
else
{
	vfulladd = vadr1 + ", " + vadr2 + ", " + vcity + ", " + vstate+ ", " + vzip + ", " + vcount;
}
$("#element_38").val(vfulladd.replaceAll("%11", ","));

//Phone
arr = urlparam[6].split(",");
vs=arr[0];
$("#element_39").val(vs);

//first date of entry
arr = urlparam[7].split(",");
vs=arr[0];
$("#element_40").val(vs);

//type of position
arr = urlparam[8].split(",");
vs=arr[0];
if(vs=="4")
{
    $("#element_41").val("Faculty");
}
else if(vs=="5")
{
	 $("#element_41").val("Post Doc/Researcher");
}
else if(vs=="6")
{
	 $("#element_41").val("Staff");
}
else
{
    $("#element_41").val(vs.replaceAll("%20", " ").replaceAll("%11",","));
}

//signature
arr = urlparam[9].split(",");
vs=arr[0];
$("#element_8").val(vs.replaceAll("%20", " ").replaceAll("%11",","));

//COC
arr = urlparam[10].split(",");
vs=arr[0];
$("#element_36").val(vs.replaceAll("%20", " ").replaceAll("%11",","));

//COR
arr = urlparam[11].split(",");
vs=arr[0];
$("#element_37").val(vs.replaceAll("%20", " ").replaceAll("%11",","));

//today
arr = urlparam[12].split(",");
vs=arr[0];
$("#element_42").val(vs.replaceAll("%11", ","));

}
});