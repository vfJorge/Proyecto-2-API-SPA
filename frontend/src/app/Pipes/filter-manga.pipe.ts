import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterManga'
})
export class FilterMangaPipe implements PipeTransform {

  transform(value: any, filterString: string) {
    if (value.lenght === 0 || filterString === ''){
      return value;
    }

    const MangasRecibidos = [];
    for(const Manga of value){
      if(Manga.node.title.toLowerCase().indexOf(filterString.toLowerCase()) > -1 || Manga.node.title.toLowerCase() === filterString.toLowerCase()){
        MangasRecibidos.push(Manga)
      }
    }
    return MangasRecibidos;
  }


}
