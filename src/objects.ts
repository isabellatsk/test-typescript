// Type - definir quais propriedades esse obj vai ter e quais os tipos dessas propriedades

//obj order
type Order = {
    productId: string
    price: number
}


type User ={
    firstName: string
    age: number
    email: string
    password?:string // "?" indica que é opcional
    orders: Order[] // orders vai ser uma lista com esse obj (Order)
}
const user: User ={
    firstName: "joao",
    age: 20,
    email: "joao@gmail.com",
    orders: [{productId: "1", price: 200}],
}

//parametros de func
const printLog = (message: string) => {}
printLog(user.password!) // "!" tira o undefined de password