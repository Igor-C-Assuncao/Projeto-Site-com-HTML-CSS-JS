Parse.initialize(
    'qKODgViKtZxHFQhZuLtc6DZS43VmFcDvQsdvKFIQ','HF97YilffWsitI9bCjP78YcajJnkTSpu8bQa1IkL');
  Parse.serverURL = "https://parseapi.back4app.com/";

  document.getElementById("cadastroButton").addEventListener("click", async () => {
    const myNewObject = new Parse.Object('Login');
    myNewObject.set('email', document.getElementById("email").value);
    myNewObject.set('password', document.getElementById("password").value);
    myNewObject.set('Nome', document.getElementById("nome").value);
    try {
      const result = await myNewObject.save();
      // Access the Parse Object attributes using the .GET method
      console.log('Login created', result);
    } catch (error) {
      console.error('Error while creating Login: ', error);
    }
  });

