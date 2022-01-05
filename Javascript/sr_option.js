function sr(){
    
var x = document.getElementById("sr_type");
var val = x.value;

console.log("test = "+val);
 
cards_list = ['charge-back','charge-back-delay','Roll','Roll تعزيز','Roll-Hub','تعزيز Roll-Hub ',
                      'Roll ايداع','Roll تعزيز ايداع',''];

complains = ['123-Zero Response','123-Zero Response تعزيز','123-Zero Others' , ' ' ]

quality = ['اجراء خاطئ','احتيال بطاقات','احتيال داخلي']; 
retention_team_list = ['اعادة الاتصال للالغاء'];


var list ; 
 if(val == "complain" )
 {
      list = complains ; 
 }

 for (let index = 0; index < list.length; index++) {
     const element = array[index];
     
 }
 
}