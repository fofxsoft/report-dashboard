import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { of } from 'rxjs/observable/of';
import { catchError, tap } from 'rxjs/operators';

import { environment } from '../environments/environment';

@Injectable()

export class EcpService {
    private href = `${environment.ecp.protocol}://${environment.ecp.domain}/aspx1/API.aspx`;

    constructor(private http: HttpClient) { }

    Report<T>(distributor: string, command: string, query?: string, parameters?: string): Observable<Report<T>> {
        if (!query || query == '') {
            query = '';
        } else {
            query = '&' + query;
        }

        if (!parameters || parameters == '') {
            parameters = '';
        } else {
            parameters = '&Parameters=' + parameters;
        }

        return this.http.get<Report<T>>(`${this.href}?Token=${environment.ecp.token}&EncompassID=${distributor}&Command=${command}${query}${parameters}`);
    }

    Records<T>(distributor: string, command: string, query?: string, parameters?: string): Observable<Records<T>> {
        if (!query || query == '') {
            query = '';
        } else {
            query = '&' + query;
        }

        if (!parameters || parameters == '') {
            parameters = '';
        } else {
            parameters = '&Parameters=' + parameters;
        }

        return this.http.get<Records<T>>(`${this.href}?Token=${environment.ecp.token}&EncompassID=${distributor}&Command=${command}${query}${parameters}`);
    }

    Single<T>(distributor: string, command: string, query?: string, parameters?: string): Observable<Record<T>> {
        if (!query || query == '') {
            query = '';
        } else {
            query = '&' + query;
        }

        if (!parameters || parameters == '') {
            parameters = '';
        } else {
            parameters = '&Parameters=' + parameters;
        }

        return this.http.get<Record<T>>(`${this.href}?Token=${environment.ecp.token}&EncompassID=${distributor}&Command=${command}${query}${parameters}`);
    }

    Update<T>(distributor: string, command: string, data: T): Observable<any> {
        return this.http.post(`${this.href}?Token=${environment.ecp.token}&EncompassID=${distributor}&Command=${command}`, data, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            observe: null,
            params: null,
            reportProgress: null,
            responseType: 'text'
        }).pipe(tap(() => { }), catchError(this.handleError('Update')));
    }

    private handleError<T>(operation = 'Unknown', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);

            return of(result as T);
        };
    }
}

export interface Report<T> {
    Export: {
        Report: {
            Row: T[];
        }
    }
}

export interface Record<T> {
    Export: {
        Table: {
            RecordCount: number;
            Name: string;
            Row: T;
        }
    }
}

export interface Records<T> {
    Export: {
        Table: {
            RecordCount: number;
            Name: string;
            Row: T[];
        }
    }
}
