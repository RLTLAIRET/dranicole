import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enfermedad'
})
export class EnfermedadPipe implements PipeTransform {

  transform(value: any, args: any=[]): any {
    let cadena=args[0]
    // console.log("argumentos : "+JSON.stringify(args))
    // console.log("busqueda : "+ args[0]);
    // console.log("tipo de busqueda : "+ args[1]);


    if (cadena==='' || cadena < 2)  return value;

    const resultado = [];

    for (const buscar of value){


        // if (buscar.codigo.toLowerCase().indexOf(cadena.toLowerCase()) > -1) {
        //   resultado.push(buscar)
        // };

        if (buscar.enfermedad.toLowerCase().indexOf(cadena.toLowerCase()) > -1) {
          resultado.push(buscar)
        };

    };
   return resultado;
  }


}
