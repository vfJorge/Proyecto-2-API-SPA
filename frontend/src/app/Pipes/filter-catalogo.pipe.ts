import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCatalogo'
})
export class FilterCatalogoPipe implements PipeTransform {

  transform(value: any, filterString: string) {
    if (value.lenght === 0 || filterString === ''){
      return value;
    }

    const ArticulosRecibidos = [];
    for(const Articulo of value){
      if(Articulo.name.toLowerCase().indexOf(filterString.toLowerCase()) > -1 || Articulo.name.toLowerCase() === filterString.toLowerCase()){
        ArticulosRecibidos.push(Articulo)
      }
    }
    return ArticulosRecibidos;
  }

}
