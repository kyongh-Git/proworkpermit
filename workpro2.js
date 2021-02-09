$(function() {
	GetParameterValues();
function GetParameterValues() { 
//get the URL   
//var url = window.location.href.slice(window.location.href.indexOf('?') +1).split('&');
var url_org = "id=702651&CWID=A11746276&ln=Kim&fn=Yonghwan&fa=71S%20University%20Apartment^^Stillwater^Oklahoma^74075^United%20States&ph=798-789-7894&fe=3/2/2021&pov=PostDoc/Researcher&sig=Oklahoma&coc=United%20States&cor=Oklahoma&today=24/2/2021";
var url = url_org.split('&');
var urlparam = String(url).split('=');

//CWID
var arr = urlparam[2].split(",");
var vs=arr[0];
$("#element_1").val(vs);

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
vvs=vs.split("^");
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
$("#element_38").val(vfulladd);

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
    $("#element_41").val(vs.replaceAll("%20", " "));
}

//signature
arr = urlparam[9].split(",");
vs=arr[0];
$("#element_8").val(vs.replaceAll("%20", " "));

//COC
arr = urlparam[10].split(",");
vs=arr[0];
$("#element_36").val(vs.replaceAll("%20", " "));

//COR
arr = urlparam[11].split(",");
vs=arr[0];
$("#element_37").val(vs.replaceAll("%20", " "));

//today
arr = urlparam[12].split(",");
vs=arr[0];
$("#element_42").val(vs);

}
});

/*
$(function() {
    $("#submit_form").click(function(e) {
        var lastName = $("#element_1").val();
        var firstName = $("#element_2").val();
        var bannerId = $("#element_4").val();
        var sevisId = $("#element_5").val();
        var emailid = $("#element_24").val();
        var gradsem = $("#element_8").val();
        var sponsoredStudent = $("#element_27").val();
        var ga = $("#element_28").val();
        var dept = $("#element_11").val();
        var status = $("#element_25").val();
        var eli = $("#element_26").val();
        var coc = $("#element_19").val();
        var cor = $("#element_20").val();
        var doe = $("#element_29").val();
        var levelofstudy = $("input[name='element_31']:checked").val();
        var los;
        if (levelofstudy == 1) {
            los = "Undergrad";
        } else if (levelofstudy == 2) {
            los = "Masters";
        } else if (levelofstudy == 3) {
            los = "PHD";
        }
        var hours = $("#element_32").val();
        var i20mm = $("#element_33_1").val();
        var i20dd = $("#element_33_2").val();
        var i20y = $("#element_33_3").val();
        var i20date = i20mm + "/" + i20dd + "/" + i20y;
        var passportvalid = $("input[name='element_34']:checked").val();
        var ppv;
        if (passportvalid == 1) {
            ppv = "Yes";
        } else {
            ppv = "No";
        }
        var querystringurl = "&ln=" + lastName + "&fn=" + firstName + "&bi=" + bannerId + "&si=" + sevisId + "&email=" + emailid + "&gradsem=" + gradsem + "&ss=" + sponsoredStudent + "&ga=" + ga + "&dept=" + dept + "&status=" + status + "&eli=" + eli + "&coc=" + coc + "&cor=" + cor + "&doe=" + doe + "&los=" + los + "&hrs=" + hours + "&i20date=" + i20date + "&ppv=" + ppv;
        var url = "https://okstate.forms-db.com/view.php?id=471147" + querystringurl;
		$("#element_35").val(url);
    });
});*/