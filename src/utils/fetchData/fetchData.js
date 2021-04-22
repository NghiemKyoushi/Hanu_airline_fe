import axios from 'axios';
//create cookies to save user when they login
export function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

export function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
export function checkCookie(name) {
    var user = getCookie(name);
    if (user != "") {
      alert("Welcome again " + user);
    } else {
      user = prompt("Please enter your name:", "");
      if (user != "" && user != null) {
        setCookie("username", user, 365);
      }
    }
  }

export function deleteCookie(name) {
  document.cookie =
    name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}  
// function save login

export  async function Login(usernameOrEmail, password){

    const body = {
        usernameOrEmail: usernameOrEmail,
        password: password
    }
    const url = "http://hanuairline.azurewebsites.net/auth/signin";
    try{
        const postData = await axios.post(url, body)
        if(postData){
            return postData;
        }
    }catch(e){
        const message = "Login_false" ;
        return message;
    }
}

export async function Register(data){
    const body ={
        name: data.name,
        username: data.username,
        email: data.email,
        imageUrl: data.imageUrl,
        password: data.password
    }
    const url ="http://hanuairline.azurewebsites.net/auth/signup";
    try{
        const postData = await axios.post(url, body)
        if(postData){
            return postData;
        }
    }catch(e){
        const message = "SignUp_false" ;
        return message;
    }

}

//format date 
export function formatDate(date){
  const format = new Date(date);
  return format.toLocaleDateString('pt-PT');
}

export function formatTime(date){
  const format = new Date(date);
  console.log("timmmmmmmmmmmmmm",format.getHours);
  return format.toLocaleTimeString('en-US');
}
export function nextDayOfDepartureTime(date, number){
  
  const format = new Date(date);
  // const day1 = format.toLocaleDateString('pt-PT');
  // const day = new Date(day1);
  // console.log("day", format)
  const nextDay = new Date(format);
  // console.log("nextday",nextDay);
  nextDay.setDate(format.getDate() + number) 
  return nextDay.toLocaleDateString('pt-PT');
}