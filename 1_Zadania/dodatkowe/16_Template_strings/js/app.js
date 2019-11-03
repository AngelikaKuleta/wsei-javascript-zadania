//zadanie 0
const person = {
    name: "Vlad",
    lastName: "Drăculea",
    yearOfBirth: 1431,
    proffesion: "Lord of Wallachia"
};

let whoAreYou = (person) => {
    console.log(`My name is ${person.name} ${person.lastName}.
    I am ${new Date().getFullYear() - person.yearOfBirth} years old.
    My proffesion is ${person.proffesion}`)
}
  
whoAreYou(person);

//zadanie 1
let num1 = 56;
let num2 = 128;
console.log(`Suma dwóch liczb ${num1} i ${num2} to: ${num1 + num2}`)

//zadanie 2
let name = "Angelika";
console.log(`Moje imę i nazwisko to: ${name} Kuleta`);

//zadanie 3
let write = () => {
    console.log(`"Myślę, że jest wiele piękna
w posiadaniu problemów.
To jeden ze sposobów w jaki się uczymy"
Herbie Hancock`);
}
write();

//zadanie 4
const button = {
    value: "Send message",
    idName: "sendMsg",
    width: "100px",
    padding: "20px",
}
console.log(`To jest button.
Jego szerokość to ${button.width + button.padding*2}.
Napis, który na nim widnieje to "${button.velue}"`);