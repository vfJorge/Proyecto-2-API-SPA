import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string) {
    if (value.lenght === 0 || filterString === ''){
      return value;
    }

    var bandera: boolean = false;
    const ComicsRecibidos = [];
    for(const Comic of value){
      if(Comic.title.toLowerCase() === (filterString.toLowerCase() || Comic.format.toLowerCase() === filterString.toLowerCase()) || Comic.title.toLowerCase().indexOf(filterString.toLowerCase()) > -1){
        ComicsRecibidos.push(Comic)
        bandera = true;
      }

      for(const character of Comic.characters.items){
        if(character.name.toLowerCase() === (filterString.toLowerCase()) || character.name.toLowerCase().indexOf(filterString.toLowerCase()) > -1){
          if(bandera === false){
            ComicsRecibidos.push(Comic)
          }
        }
      }
    }
    return ComicsRecibidos;
  }

}
