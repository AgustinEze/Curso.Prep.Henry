// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
/*  const arr=[];

    for(let clave in objeto){
      arr.push([clave,objeto[clave]]);
    }
    return arr;
*/
  return Object.entries(objeto);
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  const obj ={};
  for(let i=0;i<string.length;i++){
      if(obj[string[i]])
          obj[string[i]]++;
      else
          obj[string[i]]=1;
    }
  return obj;
}

function isUpperCase(letter){
    return letter.toUpperCase()===letter;//el lenguaje resuelve
}
function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  const strMayuscula=[];
  const strMinuscula=[];
  for(let i=0;i<s.length;i++){
    if(isUpperCase(s[i]))
        strMayuscula.push(s[i]);
    else
        strMinuscula.push(s[i]);
  }
  return strMayuscula.join('')+strMinuscula.join('');
}

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  const arr=str.split(' ');//uso una lista para poner cada palabra

  for(let i=0;i<arr.length;i++){
    arr[i]=arr[i].split('').reverse().join('');//en una sola linea, 1 for menos y un 1 if else menos :D
  }
  return arr.join(' ');
} 



function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  const arr=numero.toString();
  for(let i=0;i<arr.length/2;i++)
    if(arr[i]!==arr[arr.length-1-i])
        return "No es capicua";
  return "Es capicua";
}


//'abcjhkkdjlsfhkjfhsdakjhasdf'.split('').filter(letter=>letter!=='a'&&letter!=='b'&&letter!=='c').join('')
function includes(letter){
    const letras=['a','b','c'];
    return letras.includes(letter);
}
function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  const str=[];
  for(let i=0;i<cadena.length;i++){
    if(includes(cadena[i]))
        continue;
    else {
        str.push(cadena[i]);
    }
  }
  return str.join('');
}


function sortByLength(a,b){
    if(a.length<b.length)
        return -1;
    if(a.length<b.length)
        return 1;
    return 0;
}
function sortArray(arr) {//puedo resolverlo con un objeto {arr[i].length:[palabras que cumplen]}
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  const strByLength=[];
  for(let i=0;i<arr.length;i++){
  strByLength.push(arr[i]);
  }
  return strByLength.sort(sortByLength);
}
//arr.forEach(word=>{
//   const length=word.length;
//    if(wordsByLength[length]){
//        wordsByLength[length].push(word);
//    }
//    else wordsByLength[length]=[word];//word es el primer elemento de la lista asociada al key length
//})


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  const interseccion=[];

  for (let i=0;i<arreglo1.length;i++){
    if(arreglo2.includes(arreglo1[i]))
        interseccion.push(arreglo1[i]);
  }
  return interseccion;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

