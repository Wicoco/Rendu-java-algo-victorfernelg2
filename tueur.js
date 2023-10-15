/*
javascript 
Un tueur en série nommé Jason est en cavale. Il est caché quelque part en forêt.
Une équipe de choc est présente pour le neutraliser.
Nous avons besoin d’un tueur nommé Jason et qui possède 100 points de vie.
Nous avons besoin de Caractéristiques de personnages avec des noms bien clichés (nerd, sportif, blonde…),
une probabilité de mourir, une de mettre des dégâts et une de mourir en mettant des dégâts (ex: 0.3, 0.5, 0.2)
Nous avons besoin de 5 Survivants avec un nom généré aléatoirement d’un tableau de prénoms et d’une
caractéristique prise de celles disponibles (toujours aléatoire).
Tant que le tueur n’est pas mort ou que les survivants n’ont pas tué Jason :
Le tueur attaque un des survivants :
- soit le survivant meurt
- soit le survivant esquive et inflige 10 points de dégâts
- soit le survivant inflige 15 points de dégâts mais meurt
Les morts seront affichés à la fin
Un message est attendu pour chaque action (Jason a tué X, X a esquivé et a infligé X dmg, Jason est mort,
Les survivants ont gagné mais RIP à X, X, X…)
*/
const prenoms = ["Victor", "Adam", "Ewan", "Evan", "Théo", "Gabriel", "Oscar", "Thomas", "Adrien", "Tristan"];
const caracteristiques = ["Nerd", "Sportif", "Blonde", "Génie", "Artiste", "Aventurier", "Cuisinier", "Scientifique", "Infirmière", "Étudiant"];

class Jason {
  constructor() {
    this.nom = "Jason";
    this.vie = 100;
    this.probabiliteMourir = 0.3;
    this.probabiliteInfligerDegats = 0.5;
    this.probabiliteMourirDegats = 0.2;
  }

  attaquer(survivant) {
    const action = Math.random();
    if (action < this.probabiliteMourir && survivant.vie > 0) {
      survivant.vie = 0;
      return `${this.nom} a tué ${survivant.nom}.`;
    } else if (action < this.probabiliteMourir + this.probabiliteInfligerDegats && survivant.vie > 0) {
      survivant.vie -= 10;
      return `${survivant.nom} a esquivé et infligé 10 points de dégâts à ${this.nom}.`;
    } else {
      survivant.vie -= 15;
      if (survivant.vie <= 0) {
        morts.push(survivant.nom);
      }
      return `${survivant.nom} a infligé 15 points de dégâts à ${this.nom} mais est mort.`;
    }
  }
}

class Survivant {
  constructor() {
    this.nom = prenoms[Math.floor(Math.random() * prenoms.length)];
    this.caracteristique = caracteristiques[Math.floor(Math.random() * caracteristiques.length)];
    this.vie = 100;
  }

  attaquer(jason) {
    const action = Math.random();
    if (action < 0.5) {
      jason.vie -= 10;
      return `${this.nom} a attaqué ${jason.nom} et infligé 10 points de dégâts.`;
    } else {
      return `${this.nom} a attaqué ${jason.nom} mais n'a pas réussi à le toucher.`;
    }
  }
}

const jason = new Jason();
const survivants = Array.from({ length: 5 }, () => new Survivant());
const morts = [];

while (jason.vie > 0 && survivants.some(s => s.vie > 0)) {
  for (const survivant of survivants) {
    if (survivant.vie > 0) {
      const action = survivant.attaquer(jason);
      console.log(action);
      if (jason.vie <= 0) {
        console.log(`${jason.nom} est mort.`);
        break;
      }
    }
  }

  for (const survivant of survivants) {
    if (jason.vie > 0 && survivant.vie > 0) {
      const action = jason.attaquer(survivant);
      console.log(action);
      if (survivant.vie <= 0) {
        morts.push(survivant.nom);
        console.log(`${survivant.nom} est mort.`);
      }
    }
  }
}

if (jason.vie <= 0) {
  console.log(`Les survivants ont gagné. RIP à ${morts.join(', ')}.`);
} else {
  console.log(`Le tueur ${jason.nom} a survécu, les survivants ont échoué.`);
}
