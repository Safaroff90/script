
var again=true;
var usernames=[ 'eli','veli','pirveli']
while(again){
   var check= true;
   var username=prompt('Enter username')
   if(isNaN(username)){
      for( let i=0;i< username.length;i++){
         if(usernames[i]==username){
            check=false;
            break;
         }
      }
      if(chek==true){
         usernames.push(username);
         alert(`usernames :${usernames} `)
      }
      
   }
   else{
      alert('please enter the correct name')
   }

};
