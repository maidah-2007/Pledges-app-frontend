import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { IDonations, IPledgeTypes, IPledges } from '../../models/pledges.model';

@Injectable({
  providedIn: 'root'
})
export class PledgesService {

  constructor(private httpClient: HttpClient) { }
    // ***************************PLEDGES SERVICE*******************************
  getAllPledges(): Observable<IPledges[]>{
    return this.httpClient.get<IPledges[]>(`${environment.api_url}/pledges`)
  }
  createPledge(pledge: IPledges): Observable<IPledges>{
    return this.httpClient.post<IPledges>(`${environment.api_url}/pledges/new`, pledge)
  }
  getPledgeById(pledgeId:string):Observable<IPledges[]>{
    return this.httpClient.get<IPledges[]>(`${environment.api_url}/pledges/${pledgeId}`)
  }
  updatePledge(pledge:IPledges, pledgeId: string): Observable<IPledges>{
    return this.httpClient.post<IPledges>(`${environment.api_url}/pledges/${pledgeId}`, pledge)
  }
  deletePledge(pledgeId: string): Observable<IPledges>{
    return this.httpClient.delete<IPledges>(`${environment.api_url}/pledges/${pledgeId}`, )
  }

      // ***************************DONATIONS SERVICE*******************************
      getAllDonations():Observable<IDonations[]>{``
        return this.httpClient.get<IDonations[]>(`${environment.api_url}/donations`)
      }
      createDonations(donations: IDonations): Observable<IDonations>{
    return this.httpClient.post<IDonations>(`${environment.api_url}/donations/new`,donations)
  }
  getDonationById(donationsId:string):Observable<IDonations[]>{
    return this.httpClient.get<IDonations[]>(`${environment.api_url}/donations/${donationsId}`)
  }
  updateDonation(donations: IDonations, donationsId: string): Observable<IDonations>{
    return this.httpClient.post<IDonations>(`${environment.api_url}/donations/${donationsId}`, donations)
  }
  deleteDonations(donationsId: string): Observable<IDonations>{
    return this.httpClient.delete<IDonations>(`${environment.api_url}/donations/${donationsId}`, )
  }








          // ***************************PLEDGETYPES SERVICE*******************************

          getAllPledgeTypes():Observable<IPledgeTypes[]>{``
           return this.httpClient.get<IPledgeTypes[]>(`${environment.api_url}/pledgeTypes`)
        }
        createPledgeTypes(pledgeTypes: IPledgeTypes): Observable<IPledgeTypes>{
      return this.httpClient.post<IPledgeTypes>(`${environment.api_url}/pledgeTypes/new`,pledgeTypes)
    }
    getPledgeTypesById(PledgeTypesId:string):Observable<IPledgeTypes[]>{
      return this.httpClient.get<IPledgeTypes[]>(`${environment.api_url}/pledgeTypes/${PledgeTypesId}`)
    }
    updatePledgeTypes(PledgeTypes:IPledgeTypes, donationsId: string): Observable<IPledgeTypes>{
      return this.httpClient.post<IPledgeTypes>(`${environment.api_url}/pledgeTypes/${donationsId}`, PledgeTypes)
    }
    deletePledgeTypes(PledgeTypesId: string): Observable<IPledgeTypes>{
      return this.httpClient.delete<IPledgeTypes>(`${environment.api_url}/PledgeTypes/${PledgeTypesId}`, )
    }
  }



