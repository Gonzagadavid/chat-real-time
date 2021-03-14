const exibeChat = document.getElementById('exibe_chat')
const conversa = document.getElementById('conversa')
const participantes = document.getElementById('participantes')
const exibeParticipantes = document.getElementById('exibe_participantes')
const btnNavToggle = document.getElementById('btn_navbar_toggle')
const navCollapse = document.getElementById('navbar-collapse-1')

console.log('check')

exibeChat.addEventListener('click', e => {
  conversa.style.display = 'block'
  participantes.style.display = 'none'
  ocultaNavbar()
})

exibeParticipantes.addEventListener('click', e => {
  console.log('evento ativado')
  conversa.style.display = 'none'
  participantes.style.display = 'block'
  ocultaNavbar()
})

function ocultaNavbar () {
  btnNavToggle.classList.add('collapsed')
  navCollapse.classList.add('collapsed')
  btnNavToggle.setAttribute('aria-expanded', 'false')
  navCollapse.setAttribute('aria-expanded', 'false')
}
