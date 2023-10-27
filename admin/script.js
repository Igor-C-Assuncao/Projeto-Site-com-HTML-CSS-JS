Parse.initialize(
    'qKODgViKtZxHFQhZuLtc6DZS43VmFcDvQsdvKFIQ','HF97YilffWsitI9bCjP78YcajJnkTSpu8bQa1IkL');
  Parse.serverURL = "https://parseapi.back4app.com/";



  document.getElementById("enviarKit").addEventListener("click", async () => {
    const myNewObject = new Parse.Object('Compras');
    myNewObject.set('codProduct', 1);
    myNewObject.set('estoque', 1);
    myNewObject.set('descricao', 'A string');
    myNewObject.set('foto', new Parse.File("foto.jpg", { base64: btoa( document.getElementById("imageKit")) }));
    try {
      const result = await myNewObject.save();
      // Access the Parse Object attributes using the .GET method
      console.log('Compras created', result);
    } catch (error) {
      console.error('Error while creating Compras: ', error);
    }
  });