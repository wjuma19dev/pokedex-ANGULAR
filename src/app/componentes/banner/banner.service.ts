import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IMenu } from "./banner.interface";

@Injectable({ providedIn: 'root' })
export class BannerService {

    constructor( private http: HttpClient ) {}
    
    getMenuList() {
        return this.http.get<IMenu[]>('../../../assets/data/menu.json');
    }
}