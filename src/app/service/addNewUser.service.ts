import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router"

@Injectable()

export class AddNewUser {
    constructor(private HttpClient: HttpClient,private router: Router) { }
    addUser(body) {
        return this.HttpClient.post('http://dummy.restapiexample.com/api/v1/create', body)
            .toPromise()
            .then(a => {
                alert('thanh cong');
                
                this.router.navigate(['/'])
            }).catch(err => console.log(err))
    }
}