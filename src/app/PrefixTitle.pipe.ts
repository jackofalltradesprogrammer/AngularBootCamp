import {Pipe, PipeTransform} from "@angular/core"

@Pipe({name:'PrefixTitle'})
export class PrefixTitle implements PipeTransform{
    transform(name: string, gender: string):string {
        gender = gender.toLocaleLowerCase();
        if (gender =='male')    
            return 'Mr. '+name.toUpperCase();
        else if (gender == 'female')
            return 'Miss. ' + name.toUpperCase();
    }
    
}