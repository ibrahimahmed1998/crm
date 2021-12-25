class User {
    constructor(name, date , phone , n_id , id  ) {
      this.name = name;
      this.date = date;
      this.phone = phone;
      this.n_id = n_id;
      this.id = id;
    }
  }

let user1 = new User("ibrahim ahmed","01207053244","18-2-1918","2980100634555" , 1010111000006789 );
let user2 = new User("ahmed ibrahim ","01207053344", "18-2-1938","2980100434555" , 1010111000006787 );
let user3 = new User("ahmed ahmed","01107053344", "18-2-1798","2970100434555" , 1010111000006782 );

arr = [ user1 , user2 , user3 ]; 
// console.log(arr);

  
localStorage.setItem("users", JSON.stringify(arr));

 
//  console.log( localStorage.getItem('users') );  

 
 