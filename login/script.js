Parse.initialize(
  'qKODgViKtZxHFQhZuLtc6DZS43VmFcDvQsdvKFIQ','HF97YilffWsitI9bCjP78YcajJnkTSpu8bQa1IkL');
Parse.serverURL = "https://parseapi.back4app.com/";

document.getElementById("loginButton").addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const login = Parse.Object.extend('Login');
    const query = new Parse.Query(login);
    let loginSuccessful = false; // Variável para rastrear o sucesso do login
    
    try {
        const loginData = await query.find();
   
        for (const object of loginData) {
            const getPass = object.get('password');
            const getmail = object.get('email');
      
            if (getPass == password && getmail == email) {
                alert("Login efetuado com sucesso. Bem-vindo, " + object.get("Nome"));
                loginSuccessful = true; // Define a variável como true para indicar um login bem-sucedido
                break; // Saia do loop, pois o login foi bem-sucedido
            }
        }
        
        // Verifique se o login não foi bem-sucedido e exiba uma mensagem de alerta
        if (!loginSuccessful) {
            alert("Usuário ou senha incorretos. Por favor, tente novamente.");
        }
  
    

    } catch (error) {
        console.error('Error while fetching records', error);
    }
  });

  




