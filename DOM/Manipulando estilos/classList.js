const element = document.querySelector('body')
element.classList.add('active', 'green')
console.log(element.classList)
element.classList.remove('active')
element.classList.toggle('active')//se tiver ele tire, se nao tiver, ele coloca