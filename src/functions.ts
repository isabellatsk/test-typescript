// Manipulando o tipo dos parametros e o tipo de retorno da função
const sum = (x: number, y: number): string => {
  return (x + y).toString();
}; //vai retornar string

const value = sum(2, 4); //vai ser string porque o retorno da função é string

// Função void - função que não retorna nada
const log = (message: string): void => {
  console.log(message);
};
