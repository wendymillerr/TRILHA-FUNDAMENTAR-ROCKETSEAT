const div = document.createElement('div');
div.innerHTML = "Olá, devs";


const body = document.querySelector('body');
body.append(div); // tambem pode usar o prepend

const script = body.querySelector('script')
const div2 = document.createElement('div');
div2.innerHTML = "tudo bem?"
body.insertBefore(div2, script)

//para usar um "after":
const header = body.querySelector('header')
body.insertBefore(div, header.nextSibling)