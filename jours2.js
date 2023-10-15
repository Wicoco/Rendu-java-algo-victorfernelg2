/*
let a = "jean"
let b = "Paul"
let result = checkname(a,b)

function checkname (a,b){
  if (a==b){
  console.log(result)
} else {
    console.log("Pas identiques")
}}


let names = []
names.push("Vincent","Paul","Arthur")
names.forEach(function(names){
  console.log(names+" va à la peche")
})


let student = {
  name:'',
  favoritefood:'',
  city:'',
}
object.keys(student)
object.values(student)

if ((n % 2) == 0){
   console.log("{0} est Paire".format(n))
}else{
   console.log("{0} est Impaire".format(n))
}
let values= object.values(student)
let nombre de lettres=0
values.foreach((value)=>{
nombresdelettres += value.lenght
})
if (nombredelettres % 2===0){
console.log("pair")
} else {
console.log("impair")
}

let a = 4
let b = 4
let c = 3

if ( a=b ){
  console.log('égal')
}
if (c<b ++ a + b != 3){
  console.log('ok')
} else {
  console.log('raté')
}

switch(a){
  case b:
    console.log("égale à B")
    break
  case c:
    console.log("égale à C")
    break
  default:
    console.log("égale à rien")
}


for (let i = 0 ; i < a; i++) {
  console.log("oklm")
}


let a =3
while (a<9){
  a++
  if (a=7){
    continue
  }
  if (a=8){
    break
  }
  console.log(a)
}
console.log('j\'ai cassé la boucle au bout de '+ a +'tours')
*/

/* javascript pokemon
-Créer une classe Pokemon avec comme paramètres name, attack, defense, hp et luck une fonction
isLucky, et une fonction attackPokemon
-Créer deux instances de Pokémon avec des stats différentes.
- Tant que l'un des deux n'est pas mort
- le premier attaque le second (isLucky + attackPokemon)
- afficher la vie et les dégâts endommagés du second
- si le second est mort, arrêter la boucle
- le second attaque le premier (isLucky + attackPokemon)
- afficher la vie et les dégâts endommagés du premier
- Afficher un message de mort pour le pokemon perdant
Attention
- la formule des dégâts est la suivante: dégâts = att de l'attaquant – def du defenseur
- la luck correspond à la probabilité de toucher l'ennemi (précision en pourcentage)
- générer un nombre aléatoire avec Math.random() (qui retourne un décimal entre 0 et 1)
- si ce nombre est inférieur à luck du Pokemon alors le Pokemon peut attaquer
*/
class Pokemon {
  constructor(name, attack, defense, hp, luck) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.hp = hp;
    this.luck = luck;
  }

  isLucky() {
    return Math.random() < this.luck;
  }

  attackPokemon(pokemon) {
    if (this.isLucky()) {
      const damage = this.attack - pokemon.defense;
      pokemon.hp -= damage;
      return `Attaque réussie! ${pokemon.name} a subi ${damage} points de dégâts.`;
    }
    return `Attaque manquée!`;
  }
}

const pokemon1 = new Pokemon("Zekrom", 50, 30, 100, 0.8);
const pokemon2 = new Pokemon("Reshiram", 70, 40, 120, 0.9);

while (pokemon1.hp > 0 && pokemon2.hp > 0) {
  console.log(`${pokemon1.name} attaque ${pokemon2.name}`);
  console.log(pokemon1.attackPokemon(pokemon2));
  console.log(`Vie restante de ${pokemon2.name}: ${pokemon2.hp}`);
  
  if (pokemon2.hp <= 0) {
    break;
  }

  console.log(`${pokemon2.name} attaque ${pokemon1.name}`);
  console.log(pokemon2.attackPokemon(pokemon1));
  console.log(`Vie restante de ${pokemon1.name}: ${pokemon1.hp}`);
}

if (pokemon1.hp <= 0) {
  console.log(`${pokemon1.name} est mort. ${pokemon2.name} est le gagnant!`);
} else {
  console.log(`${pokemon2.name} est mort. ${pokemon1.name} est le gagnant!`);
}
