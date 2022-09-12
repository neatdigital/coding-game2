// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
/*
MODE TAILLE DE CODE
Il faut passer le plus de tests avec le code le plus court.

 	Objectif
You will be given N input lines, each one representing either a square or a rectangle.
Each line will contain the perimeter p of the shape.
The line could include a second integer x, representing the length of one side of the shape. If no x is given, assume the shape is a square.

You need to find out the area of each shape.

Entrée

Line 1: An integer N representing the number of input lines
Next N lines: The perimeter p and, optionally, the length of one side x, in that case, space-separated.

Sortie

The area of the shape.

Contraintes

The side lengths are all integer.
1 <= N <= 10
4 <= p <= 4000
1 <= x <= 1999

Exemple

Entrée

2
20 4
24

Sortie

24
36
*/

//const N = parseInt(readline());
const inputs = ['20 4', '24'];

for (const input of inputs) {
  const perimeter = input.split(' ')[0];
  const side = input.split(' ')[1];
  let area = side ? (perimeter / 2 - side) * side : Math.pow(perimeter / 4, 2);
  console.log(area);
}
