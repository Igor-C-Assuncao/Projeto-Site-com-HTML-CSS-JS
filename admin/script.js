Parse.initialize(
    'qKODgViKtZxHFQhZuLtc6DZS43VmFcDvQsdvKFIQ','HF97YilffWsitI9bCjP78YcajJnkTSpu8bQa1IkL');
  Parse.serverURL = "https://parseapi.back4app.com/";



  document.getElementById("enviarKit").addEventListener("click", async () => {
    const myNewObject = new Parse.Object('Compras');
    myNewObject.set('codProduct', 1);
    myNewObject.set('estoque',  document.getElementById("stoxkKit").value);
    myNewObject.set('descricao', document.getElementById("nameKit").value);   
    myNewObject.set('valor',document.getElementById("valueKit").value);
    myNewObject.set('foto', new Parse.File("resume.jpg", { base64: btoa(document.getElementById("foto").value) }));
    try {
      const result = await myNewObject.save();
      // Access the Parse Object attributes using the .GET method
      console.log('Compras created', result);
    } catch (error) {
      console.error('Error while creating Compras: ', error);
    }
  });