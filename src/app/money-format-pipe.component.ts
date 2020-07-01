import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'moneyFormatPipe' })
export class MoneyFormatPipe implements PipeTransform {
    transform(money:string) : string {
        return money + " VND"
    }

}