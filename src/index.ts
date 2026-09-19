// tipos básicos
let age: number = 5
const firstName: string = 'Felipe'
const isValid: boolean = true
let idk: any = 5  //any pode ser qualquer tipo

idk = '12'
idk = true

const ids: number[] = [1, 2, 3, 4]
const booleans: boolean[] = [true, false, false, true]
const names: string[] = ["Joao", "Carlos"]


// Tupla - ordem exata de valores 
const person: [number, string] = [1, "joao"]


// Lista de Tuplas
const people: [number, string][] = [
    [2, "Marcos"],
    [3, "Ana"],
    [4, "Lucas"]
]


// Intersections - uma variável tenha um tipo ou outro
const productId: string | number | boolean = '32'


// Enum - atribuir um valor a outro valor
enum Direction {
    Up = 1,
    Down = 2
}
const direction = Direction.Up
console.log(direction) //vai retornar 1


// Type Assertions - mudar o tipo da variavel
const productName: any = "boné"

let itemId = productName as string // Forma 1
//let itemId = <string>productName // Forma 2 





