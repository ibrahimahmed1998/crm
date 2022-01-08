function sr(){
    
   

var x = document.getElementById("sr_type");
var val = x.value;

console.log("test = "+val);
 
cards_list = ['charge-back','charge-back-delay','Roll','Roll تعزيز','Roll-Hub','تعزيز Roll-Hub ',
                      'Roll ايداع','Roll تعزيز ايداع',''];

complains = ['123-Zero Response','123-Zero Response تعزيز','123-Zero Others' , ' ' ]

quality = ['اجراء خاطئ','احتيال بطاقات','احتيال داخلي']; 
retention_team_list = ['اعادة الاتصال للالغاء'];

request = ['البطاقات الائتمانية ','internet banking' ,'بطاقات القطاع العام  ', 'بطاقات القطاع الخاص'];
outbound = ['Hard-Call','Hard-Call VIP','Hard-Call System Down'];

callback = ['تأخر اصدار Credit','تأخر اصدار Debit/Payroll/Prepaid','تأخر ارسال للفرع'];

var list ; 


switch (val) {
    case "Complains":   list = complains  ;break;
    case "cards_list":   list = cards_list  ;break;
    case "quality":   list = quality  ;break;
    case "retention_team_list":   list = retention_team_list  ;break;
    case "request":   list = request  ;break;
    case "outbound":   list = outbound  ;break;
    case "callback":   list = callback  ;break;

    default:
        break;
}
 
 clear();
 
 for(let index = 0; index < list.length; index++){
    const option = document.createElement("option");
    option.setAttribute("value",list[index]);
    option.setAttribute("id",'sub_option');

    option.innerHTML=list[index];


    const subject = document.getElementById("subject");

    subject.appendChild(option); 
 }
}

function clear(){
    var counter = document.getElementById("subject").childElementCount;
    for (let index = 0; index < counter ; index++){    
          var sub_option = document.getElementById("sub_option");
          sub_option.remove();  }}


function new_req(){

    $("#sr_num").show();
    $("#sr_num").css("visibility","visible");
}


function new_sr_box(){

    $(".container-boxed").show();
    $(".container-boxed").css("visibility","visible");
}
 



function sr_display() {

    home();
    unhome();

    $(".service_request").show();
    $(".service_request").css("visibility","visible");


    // $(".User_Search").hide();
    // //$(".Search_Result").hide();
    // $("#User_Data").hide();
    // $("img").hide();
 
    // $("#add_user_btn").hide();
 
    
 
 }

 
 