import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Driver} from "../../data-models/driver";


@Injectable()

export class DriversService {
  constructor(private  http: HttpClient) {}

  getDrivers(): Observable<Driver[]> {
    return this.http.get<Driver[]>('http://localhost:3000/drivers');
  }

  addDriver(driver: Driver): Observable<Driver> {
    return this.http.post<Driver>('http://localhost:3000/drivers', driver);
  }

  updateDriver(id: string | number, changes: Partial<Driver>): Observable<any> {
    return this.http.put(`http://localhost:3000/drivers/${id}`, changes);
  }

  deleteDriver(id: string): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/drivers/${id}`);
  }
}
