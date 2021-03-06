import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ExpedicalidadeMedicaDTO } from "../../modules/expmedica.dto";
import { Observable } from "rxjs";
import { API_CONFIG } from "../../config/api.config";


@Injectable()
export class ExpecialideMedicoService{
    
    constructor(public http: HttpClient) {
}

findAll(): Observable<ExpedicalidadeMedicaDTO[]>  {
    return this.http.get<ExpedicalidadeMedicaDTO[]>(`${API_CONFIG.baseUrl}/expecialidademedicos`);
}
insert(obj: ExpedicalidadeMedicaDTO){
    return this.http.post(`${API_CONFIG.baseUrl}/expecialidademedicos`,
    obj,
    {   
       observe: "response",
       responseType: "text"
    }
  )
  }
}