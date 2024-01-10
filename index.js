//função para  criar uma nova  label e não precisar escrever codigos repetidos no decorrer do documento
function createLabel(text, htmlFor) {
    //cria um novo elemento label
    const label = document.createElement('label')
    //for é usado como um rotulo para um elemento de formulario usando o 'id' desse elemento, a label e o elemento form se interligam pelo for
    label.htmlFor = htmlFor
    //innerText é usado para alterar/definir o texto do elemento, no caso a label. Isso coloca o texto dentro da etiqueta <label>
    label.innerText = text
    //o return serve para que o valor retornado da função seja o label
    return label 
}

//função criada para criar um input no docuemnto sem precisar repetir codigos 
function createInput(id, value, name, type = 'text', placeholder = '') {
    //cria um elemento input
    const input = document.createElement('input')
    //define o id do input
    input.id = id
    //define o valor do input
    input.value = value
    //define o nome do input
    input.name = name
    //define o tipo do input
    input.type = type
    //define o texto dentro do input 
    input.placeholder = placeholder
    //retorna o input
    return input
}

//chama no html o elemnto botao para adicionar uma nova tecnologia
const addTechBtn = document.getElementById('NewtechBtn')
//chama no html a seção form
const form = document.getElementById('form')
//cria um array vazio de developers
const developers = []
//cria uma variavel com valor 0
let inputRows = 0

//adiciona um evento ao botão de uma nova tecnologia, sempre que houver um clique no mesmo
addTechBtn.addEventListener('click', function(ev) {
    //chama a ul que foi criada no html
    const ul = document.getElementById('listDevs')

    //cria um elemento li para adicionr uma nova linha de desenvolvedor quando cadastrado
    const newRow = document.createElement('li')
    //valor do rowIndex é 0, pois o inputRows tem o valor 0 fora dessa função
    const rowIndex = inputRows
    //soma 1 no inputRows
    inputRows++
    //o li newRow criado passa a ter um id definido pelo nome 'inputRow' e mais o valor do rowIndex
    newRow.id = 'inputRow-' + rowIndex
    //adiciona uma classe nome ao li newRow
    newRow.className = 'inputRow'

    //cria uma label pela função e passa os valores definidos da função
    const techNameLabel = createLabel('Nome: ', 'techName-' + rowIndex)
    //cria um novo input e passa os valores definidos 
    const techNameInput = createInput('techName' + rowIndex, null, 'techName')

    //cria uma nova label para o input de 'radio'
    const expLabel = createLabel('Experiencia: ')
    // cria um id unico para o input radio
    const id1 = 'expRadio-' + rowIndex + '.1'
    //cria um input do tipo radio chamando o id criado acima para ser unico
    const expRadio1 = createInput(id1, '0-2 anos', 'techExp-' + rowIndex, 'radio')
    //cria uma label para o input de id1
    const expLabel1 = createLabel('0-2 anos', id1)
    // cria um id unico para o input radio
    const id2 = 'expRadio-' + rowIndex + '.2'
    //cria um input do tipo radio chamando o id criado acima para ser unico
    const expRadio2 = createInput(id2, '3-4 anos', 'techExp-' + rowIndex, 'radio')
    //cria uma label para o input de id2
    const expLabel2 = createLabel('3-4 anos', id2)
    // cria um id unico para o input radio
    const id3 = 'expRadio-' + rowIndex + '.3'
    //cria um input do tipo radio chamando o id criado acima para ser unico
    const expRadio3 = createInput(id3, '5 anos', 'techExp-' + rowIndex, 'radio')
    //cria uma label para o input de id2
    const expLabel3 = createLabel('5 anos', id3)

    //cria um botão 
    const removeRowBtn = document.createElement('button')
    //define o tipo do botão
    removeRowBtn.type = 'button'
    //define o texto do botão
    removeRowBtn.innerText = 'Remover'
    //adiciona um evento no botão de clique
    removeRowBtn.addEventListener('click', function() {
        //remove o filho newrow de dentro da ul
        ul.removeChild(newRow)
    })

    //adiciona ao newRow os elementos chamados
    newRow.append(techNameLabel, techNameInput, expLabel, expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3, removeRowBtn)
    //adiciona na ul o newRow
    ul.appendChild(newRow)

})

//cria uma ação quando o submit ocorrer 
form.addEventListener('submit', function(ev) {
    //serve para quebrar um evento padrão do js, no caso ao enviar o formulario, a pagina não será carregada pois de acordo com o evento padrão ela iria recarregar
    ev.preventDefault()

    //pega o input de fullname e inputrow no html
    const fullnameInput = document.getElementById('fullNameInput')
    const inputRows = document.querySelectorAll('.inputRow')

    //cria um array vazio
    let technologies = []
    //para cada input rows acontece os seguintes comandos:
    inputRows.forEach(function (row){
        //#rowId input[name="techName"]
        //pega o valor do input que tem o nome techname e adiciona o row.id
        const techName = document.querySelector('#' + row.id + ' input[name="techName"').value
        ///pega o valor do input dos inputs tipo radio e adiciona um row.id
        const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value
        //adiciona em technologies o nome e o tempo de experiencia
        technologies.push({ name: techName, exp: techExp})
    })

//cria um objeto newDev que contem o nome completo, e as tecnologias adicionadas
const newDev = {fullname: fullnameInput.value, technologies: technologies}
//adiciona no array developers o objeto newdev
developers.push(newDev)
//alerta ao usuario que foi cadastrado com sucesso
alert('Dev cadastrado com sucesso!')

//limpa o input fullname
fullnameInput.value = ''
//limpa os inputsrows
inputRows.forEach(function (row) {
    row.remove()
})
//mostra no console os dados developers 
console.log(developers)
})