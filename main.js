/* console.log('************Elementos del Documento**********');

console.log(window.document);
console.log(document); //igual que arriba
console.log(document.head);
console.log(document.body);
console.log(document.documentElement); //para obtener la etiqueta html completa
console.log(document.doctype);
console.log(document.charset);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
setTimeout(() => {
    console.log(document.getSelection().toString());
}, 3000); */

/* console.log('************Nodos, Elementos, Selectores**********');

//Nodos (nodeType): Comentarios HTML, Etiquetas, Textos de p, h etc, 

//Métodos deprecados NO USAR
console.log(document.getElementsByTagName('li')); //devuelve un HTMLCollection
console.log(document.getElementsByClassName('card'));
console.log(document.getElementsByName('nombre')); //devuelve un NodeList
//El siguiente SÍ SE USA porque es más rápido
console.log(document.getElementById('menu')); //devuelve un NodeList

//Metodos Query que son buena práctica.
console.log(document.querySelector('#menu'));// para un id usar #. para usar una clase usar .
console.log(document.querySelector('a')); //Trae el primer a
console.log(document.querySelectorAll('a')); //Trae todos los a
document.querySelectorAll('a').forEach((value)=> console.log(value))
console.log(document.querySelectorAll('.card'));
console.log(document.querySelectorAll('.card')[2]); //Le podemos pedir uno en específico segun index

console.log(document.querySelectorAll('li')); //trae todos los li 
console.log(document.querySelectorAll('#menu li')); //trae solo los li hijhos del elemento con id menu
 */
console.log("************Atributos y Data Attributes**********");

console.log(document.documentElement.lang); //es
console.log(document.documentElement.getAttribute("lang")); //es. parece que no hace diferencia pero sí es mejor usar getattribute por el siguiente ejemplo
console.log(document.querySelector(".link-dom").href); //http://127.0.0.1:5500/dom.html
console.log(document.querySelector(".link-dom").getAttribute("href")); //dom.html

//Modificar valores de los atributos:

document.documentElement.lang = "en";
console.log(document.documentElement.lang); //en

document.documentElement.setAttribute("lang", "fr");
console.log(document.documentElement.lang); //fr

//Podemos empezar a guardar en variables los documentos del DOM

const $linkDOM = document.querySelector(".link-dom");

//Ahora modifiquemos atributos usando la variable del elemento del dom

$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("href", "https://aprendejavascript.org");
$linkDOM.setAttribute("rel", "noopener");

//Ahora validemos si un atributo existe

console.log($linkDOM.hasAttribute('rel')); //true
console.log($linkDOM.hasAttribute('style')); //false

//Ahora removamos atributos

$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute('rel')); //false

//data-attributes

console.log($linkDOM.getAttribute('data-description')); //Document Object Model
console.log($linkDOM.dataset); //DOMStringMap {description: "Document Object Model"}