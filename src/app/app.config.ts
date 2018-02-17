import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AppConfig {

    private tags:    Object = null;

    constructor(private http: Http) {

    }

    /**
     * Use to get the data found in the first file (env file)
     */
    public getTags() {
        return this.tags;
    }

    /**
     * This method:
     *   a) Loads "env.json" to get the current working environment (e.g.: 'production', 'development')
     *   b) Loads "config.[env].json" to get all env's variables (e.g.: 'config.development.json')
     */
    public load() {
        return new Promise((resolve, reject) => {
            this.http.get('http://localhost:4200/assets/tags.json').map( res => res.json() )
                 .subscribe(data => {
                   this.tags = data;
                   resolve(true);
                  });
        });
    }
}
