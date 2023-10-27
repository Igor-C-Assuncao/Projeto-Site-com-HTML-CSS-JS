Parse.initialize(
  'qKODgViKtZxHFQhZuLtc6DZS43VmFcDvQsdvKFIQ','HF97YilffWsitI9bCjP78YcajJnkTSpu8bQa1IkL');
Parse.serverURL = "https://parseapi.back4app.com/";

document.getElementById("loginButton").addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const login = Parse.Object.extend('Login');
    const query = new Parse.Query(login);
    
    try {

    const login = await query.find();

    for( const object of login){
        const getPass = object.get('password')
        const getmail = object.get('email')
      
      if(getPass == password && getmail == email ){
        alert("Login efetuado com sucesso. Bem-vindo, " + object.get("Nome"));

      
    }else{
    alert("Usuario ou senha incorreto");
    }
   
  
    }

    } catch (error) {
        console.error('Error while fetching records', error);
    }
  });

  const passwordInput = document.getElementById('password');
const eyeIcon = document.getElementById('eye');
let isShowingPassword = false;

eyeIcon.addEventListener('mousedown', () => {
  passwordInput.type = 'text';
  isShowingPassword = true;
});

document.addEventListener('mouseup', () => {
  if (isShowingPassword) {
    passwordInput.type = 'password';
    isShowingPassword = false;
  }
});




