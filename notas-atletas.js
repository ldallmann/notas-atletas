function calcularMedia(objAtletas) {

    let notasAtletasOrdenadas = objAtletas.map(function(obj){
      return obj.notas;
    });
    
    for (let i = 0; i < notasAtletasOrdenadas.length; i++) {
      notasAtletasOrdenadas[i].sort(function(a, b){return a-b});
    };

    let notasAtletas = notasAtletasOrdenadas.map(function(obj){
      return obj.slice(1, objAtletas.length);
    });

    let mediasAtletas = notasAtletas.map(function(obj){
      return (obj[0] + obj[1] + obj[2]) / obj.length;
    });
    
    let retornoFinal = [];
    
    for(let i = 0; i < notasAtletasOrdenadas.length; i++){
    retornoFinal.push(
        {
          atleta: objAtletas[i].nome,
          notasObtidas: objAtletas[i].notas,
          mediaValida: mediasAtletas[i]
        }
      );
    };
      
    /*for (let i = 0; i < objAtletas.length; i++) {
      console.log(`Atleta: ${objAtletas[i].nome}
Notas Obtidas: ${objAtletas[i].notas}
Média Válida: ${mediasAtletas[i]}
`);};*/

    return retornoFinal;
}

let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

console.log(calcularMedia(atletas));