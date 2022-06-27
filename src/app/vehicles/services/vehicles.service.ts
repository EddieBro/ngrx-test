import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vehicle} from "@models/vehicle";

@Injectable()
export class VehiclesService {
  constructor(private  http: HttpClient) {}

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>('http://localhost:3000/vehicles');
  }

  addVehicle(driver: Vehicle): Observable<Vehicle> {
    return this.http.post<Vehicle>('http://localhost:3000/vehicles', driver);
  }

  updateVehicle(id: string | number, changes: Partial<Vehicle>): Observable<any> {
    return this.http.put(`http://localhost:3000/vehicles/${id}`, changes);
  }

  deleteVehicle(id: string): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/vehicles/${id}`);
  }
}
