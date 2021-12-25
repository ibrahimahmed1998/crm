function contacts(){
    $(".Search_Result").hide();    
     $("#footer_nav").hide(); 
    $("#User_Data").hide();         $("#add_user_form").hide();   
    $("#add_user_btn").hide();      $(".User_Search").show();
    $("#submit").show();            $("#submit").css("visibility","visible");
    $("img").hide();
}

function f1() {
    $("#submit").hide();        $(".User_Search").hide();
    $(".Search_Result").show();     $(".Search_Result").css("visibility","visible");
    $("img").hide();
    $("#footer_nav").show(); 

    server_data = localStorage.getItem('users')
    var users  = JSON.parse(server_data);       console.log(  users );
    
    in_account = document.getElementById("in_account").value;
    in_phone = document.getElementById("in_phone").value;
    in_nid = document.getElementById("in_nid").value;
    in_cid = document.getElementById("in_cid").value;
    in_ivr = document.getElementById("in_ivr").value;
    in_name = document.getElementById("in_name").value;

    arr = {"in_name":in_name , "in_phone":in_phone  , "in_account":in_account ,  "in_nid":in_nid , "in_cid":in_cid , "in_ivr":in_ivr  } ; 
    names = ["in_name","in_phone","in_account","in_nid","in_cid","in_ivr"]

    var search_key ; 

    for (let i = 0; i < names.length; i++){
    
            if( (arr[ names[i] ]) != "" ) {  
                search_key=i ;  value=names[i] ; 
               // console.log("search_key  is : " + search_key + " value " + value + "arr[value] " + arr[value] );  
            }

        }
                  
    for (let i = 0; i < users.length; i++){ 

        var Users_Key = Object.keys(users)[i];        
        var user = users[Users_Key];                 
        
        var user_key = Object.keys(user)[search_key]; 

        //console.log("user_key : " +  user_key );

        var indexd_value = user[user_key];        

        if( indexd_value == arr[value] ) 
            { 
                console.log( "indexd_value : "+  indexd_value ,"arr[value] : " +  arr[value] , "user_index : " + Users_Key  );

                document.getElementById("Account_State_id").value=" Active ";
                document.getElementById("Account_Type_id").value=user.id;
                document.getElementById("result_n_id").value=user.n_id;
                document.getElementById("res_phone").value=user.date;
                document.getElementById("res_name").value=user.name;  
                document.getElementById("res_ivr_state").value=user.phone; 
            }
    }



    
    // if(elm == null){ console.log("not found " + elm ); }
    // else{ console.log(users[elm]); }

}
    
