let notes = [
  {
    nome: "joao",
    nota1 : 8,
    nota2 : 3,
  },
  {
    nome:"nunes",
    nota1: 10,
    nota2: 9
  
  },
  {
    nome: "leticia",
    nota1: 8,
    nota2: 8
  }
]

 let OneNote = 0
 let TwoNote = 0
 let TreeNote = 0

function calc () {
   OneNote = (notes[0].nota1 + notes[0].nota2 ) / 2
  TwoNote = (notes[1].nota2 + notes[1].nota2) / 2
  TreeNote = (notes[2].nota2 + notes[2].nota2) / 2

}

calc()

  

 if(OneNote >= 7) {
  alert(`a Media do(a) aluno(a) ${notes[0].nome} e de : ${OneNote} 
  parabens ${notes[0].nome} voce foi aprovado no concurso`)
 }else{
  alert(`A media do(a) aluno(a) ${notes[0].nome} foi de: ${OneNote} 
  Nao foi desssa vez, ${notes[0].nome}, Tente novamente!!`)
 }

 if(TwoNote >= 7){
  alert(`a Media do(a) aluno(a) ${notes[1].nome} e de : ${TwoNote} 
  parabens ${notes[1].nome} voce foi aprovado no consurso`)
 }else{
  alert(`A media do(a) aluno(a) ${notes[1].nome} foi de: ${TwoNote} 
  Nao foi desssa vez, ${notes[1].nome}, Tente novamente!!`)

 }

 if(TreeNote >= 7){
  alert(`a Media do(a) aluno(a) ${notes[2].nome} e de : ${TreeNote} 
  parabens ${notes[2].nome} voce foi aprovado no consurso`)
 }else{
  alert(`A media do(a) aluno(a) ${notes[2].nome} foi de: ${TreeNote} 
  Nao foi desssa vez, ${notes[2].nome}, Tente novamente!!`)
 }



