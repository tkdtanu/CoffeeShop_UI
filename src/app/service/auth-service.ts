import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {
    }
    host: string = 'http://localhost:9090';
    login(username: string, password: string) {
        return this.http.post(this.host +'/api/user/auth/login', { username, password });
    }
}