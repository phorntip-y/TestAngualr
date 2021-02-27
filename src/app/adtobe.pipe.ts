import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adtobe'
})
export class AdtobePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    const monthName = ['ม.ค.','ก.พ.','มี.ค.','ม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'];
    const curentdate = new Date(value);
    return `${curentdate.getDate()} ${monthName[curentdate.getMonth()]} ${curentdate.getFullYear() + 543}`;
  }

}
