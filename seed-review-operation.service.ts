import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SeedReviewDto } from './seed-review-dto';
import { SeedReview } from './seed-review';

@Injectable({
  providedIn: 'root'
})
export class SeedReviewOperationService {
 
 
  seedArr:SeedReview[] = [];
  
  baseURL:string = 'http://localhost:6001';
  submitReviewEndPoint:string=this.baseURL+'/nurseryreview/add';
  ReviewByOrderIdEndPoint:string=this.baseURL+'/nurseryreview/review/orderId';
   allReviewEndPoint: string=this.baseURL+ '/nurseryreview/listOfReviews';
   ReviewBystarRatingEndPoint:string=this.baseURL+ '/nurseryreview/reviews';
   ReviewBySeedIdEndPoint:string=this.baseURL+ '/nurseryreview/review/seedId';
  constructor(private http:HttpClient) {
    

   }



   submitSeedReview(SeedReview: SeedReview):Observable<SeedReview[]> {

    console.log("inside method 1 : Review added" +SeedReview);
    
    return this.http.post<SeedReview[]>(`${this.submitReviewEndPoint}`,SeedReview);
    
  }
  getByPlantReview(SeedReview: SeedReview):Observable<SeedReview[]> {

    console.log("inside method 1 : Review added" +SeedReview);
    
    return this.http.post<SeedReview[]>(`${this.allReviewEndPoint}`,SeedReview);
    
  }
  getAllreviewsFromSpring():Observable<SeedReviewDto[]> {
    console.log("inside service : "+this.allReviewEndPoint);
      return this.http.get<SeedReviewDto[]>(`${this.allReviewEndPoint}`);
  }

  
  getReviewDetailsbyOrderId(OrderId:number):Observable<SeedReviewDto[]>{
    console.log("inside method 1" +this.ReviewByOrderIdEndPoint);
    this.ReviewByOrderIdEndPoint= this.ReviewByOrderIdEndPoint+'/'+OrderId;
   

    return this.http.get<SeedReviewDto[]>(`${this.ReviewByOrderIdEndPoint}`);
   }
   getReviewDetailsbystarRating(starRating:number):Observable<SeedReviewDto[]>{
    console.log("inside method 1" +this.ReviewBystarRatingEndPoint);
    this.ReviewBystarRatingEndPoint= this.ReviewBystarRatingEndPoint+'/'+starRating;
   

    return this.http.get<SeedReviewDto[]>(`${this.ReviewBystarRatingEndPoint}`);
   }
  //  getRatingsByPlantId(filterReviewbyrating:number):Observable<SeedReview>
  //  {
  //   console.log("inside method 1 : Review added" +filterReviewbyrating);
    
  //   return this.http.post<SeedReview>(`${this.RatingsByPlantIdEndPoint}`,filterReviewbyrating);
  //  }
  
  getReviewsBySeedId(seedId:number):Observable<SeedReviewDto[]>{
    console.log("inside method 1" +this.ReviewBySeedIdEndPoint);
    this.ReviewBySeedIdEndPoint= this.ReviewBySeedIdEndPoint+'/'+seedId;
    console.log("after getting review 2"+ this.ReviewBySeedIdEndPoint);

    return this.http.get<SeedReviewDto[]>(`${this.ReviewBySeedIdEndPoint}`);
   }
}


