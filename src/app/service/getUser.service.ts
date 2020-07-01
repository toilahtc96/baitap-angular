import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class GetUserService {
    constructor(private HttpClient: HttpClient) { }
    getUser() {
        return this.HttpClient.get<any>('http://dummy.restapiexample.com/api/v1/employees')
            .toPromise()
            .then(res => res.data)
            .catch(err => console.log(err))
    }

    
}