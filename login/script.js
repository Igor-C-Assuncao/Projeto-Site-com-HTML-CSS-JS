


Parse.initialize(
  'qKODgViKtZxHFQhZuLtc6DZS43VmFcDvQsdvKFIQ','HF97YilffWsitI9bCjP78YcajJnkTSpu8bQa1IkL');
Parse.serverURL = "https://parseapi.back4app.com/";

document.getElementById("loginButton").addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    try {
       
      const user = await Parse.Cloud.run("Login", { email, password });

      console.log("Login efetuado com sucesso. Bem-vindo, " + user.get("username"));

    // Redirecione o usuário para a página principal da loja.
    alert("Login efetuado com sucesso!");
    } catch (error) {
      console.error("Erro de login: " + error.message);
    }
  });