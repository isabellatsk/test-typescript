// Type - definir quais propriedades esse obj vai ter e quais os tipos dessas propriedades
var user = {
    firstName: "joao",
    age: 20,
    email: "joao@gmail.com",
    orders: [{ productId: "1", price: 200 }],
};
//parametros de func
var printLog = function (message) { };
printLog(user.password); // "!" tira o undefined de password
