
// onload( home() );
function home(){

    $(".search_form").hide();
    $(".search_res_boxed").hide();


    $(".acc_state").hide();


    $(".res_acc").css("visibility","hidden");
    $("#User_Data").hide();

    $("#submit").hide();

    $("#add_user_btn").hide();
    $("#add_user").hide();


    $(".service_request").hide();
    $("#sr_num").hide();
    $(".container-boxed").hide();

    $("#footer_nav").hide();


    $(".activity").hide();
    // $("#activity").hide();

    

    $("img").show();
}

 

function unhome() {

    $("#footer_nav").show();
    $("img").hide();

}



