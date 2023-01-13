const header = document.querySelector('header')
header.setAttribute('id', 'header')/*Adicionou o atributo id*/

const headerID = document.querySelector(' #header   ')/*pesquisou pelo id header */

console.log(headerID)/*printou o id */


/*Tambem pode fazer assim */
console.log(headerID.getAttribute('id'))
console.log(headerID.getAttribute('class'))
header.removeAttribute('id')//removi atributo id