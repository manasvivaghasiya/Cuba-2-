import { Injectable, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import { observable } from 'rxjs';
// import * as firebase from 'firebase/app';
import { environment } from 'src/environments/environment';
import { EmailValidator } from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';
import { HttpClient } from '@angular/common/http';

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  public userData: any;
  public user: firebase.User;
  public showLoader: boolean = false;

  url = 'https://raasleela-api.mycodelibraries.com/api';



  constructor(
    private httpClient: HttpClient,
    public router: Router,
    public ngZone: NgZone,
    public toster: ToastrService,
    private cookieService: CookieService) {

    // this.afAuth.authState.subscribe(user => {
    //   if (user) {
    //     this.userData = user;
    //     cookieService.set('user', JSON.stringify(this.userData));
    //     localStorage.setItem('user', JSON.stringify(this.userData));
    //     JSON.parse(localStorage.getItem('user'));
    //   } else {
    //     localStorage.setItem('user', null);
    //     JSON.parse(localStorage.getItem('user'));
    //   }
    // });
  }

  ngOnInit(): void { }

  // sign in function
  // SignIn(email:string, password:string) {
  //   return this.afAuth.auth.signInWithEmailAndPassword(email, password),
  //  return this.httpClient.post(`${environment.api}/account/login`)
  //     .then((result) => {
  //       if (result.user.emailVerified !== true) {
  //         this.SetUserData(result.user);
  //         this.SendVerificationMail();
  //         this.showLoader = true;
  //       } else {
  //         this.showLoader = false;
  //         this.ngZone.run(() => {
  //           this.router.navigate(['/auth/login']);
  //         });
  //       }
  //     }).catch((error) => {
  //       this.toster.error('You have enter Wrong Email or Password.');
  //     })
  // }

  SignIn(email: string, password: string) {
    return this.httpClient.post(`${environment.api}/account/login`, {
      username: email,
      password: password
    });
  }

  // SignIn(email:string,password:string){
  //   return this.httpClient.post(`${environment.api}/account/login`,{
  //     email:email,
  //     password:password
  //   }).subscribe(res=>{
  //     
  //     console.log(res);
  //   });
  // }

  isLoggedIn() {
    return localStorage.getItem('user');
  }
  // main verification function
  // SendVerificationMail() {
  //   return this.afAuth.auth.currentUser.sendEmailVerification()
  //     .then(() => {
  //       this.router.navigate(['/dashboard/default']);
  //     })
  // }

  // Sign in with Facebook
  // signInFacebok() {
  //   return this.AuthLogin(new auth.FacebookAuthProvider());
  // }

  // // Sign in with Twitter
  // signInTwitter() {
  //   return this.AuthLogin(new auth.TwitterAuthProvider());
  // }

  // // Sign in with Google
  // GoogleAuth() {
  //   return this.AuthLogin(new auth.GoogleAuthProvider());
  // }

  // ForgotPassword(passwordResetEmail) {
  //   return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
  //     .then(() => {
  //       window.alert('Password reset email sent, check your inbox.');
  //     }).catch((error) => {
  //       window.alert(error);
  //     });
  // }

  // Authentication for Login
  // AuthLogin(provider) {
  //   return this.afAuth.auth.signInWithPopup(provider)
  //     .then((result) => {
  //       this.ngZone.run(() => {
  //         this.router.navigate(['/dashboard/default']);
  //       });
  //       // this.SetUserData(result.user);
  //     }).catch((error) => {
  //       window.alert(error);
  //     });
  // }

  // Set user
  // SetUserData(user) {
  //   const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
  //   const userData: User = {
  //     email: user.email,
  //     displayName: user.displayName,
  //     uid: user.uid,
  //     photoURL: user.photoURL || 'assets/dashboeard/boy-2.png',
  //     emailVerified: user.emailVerified
  //   };
  //   userRef.delete().then(function () {})
  //         .catch(function (error) {});
  //   return userRef.set(userData, {
  //     merge: true
  //   });
  // }

  // // Sign out
  // SignOut() {
  //   this.router.routeReuseStrategy.shouldReuseRoute = function () {
  //     return false;
  //   };
  //   return this.afAuth.auth.signOut().then(() => {
  //     this.showLoader = false;
  //     localStorage.clear();
  //     this.cookieService.deleteAll('user', '/auth/login');
  //     this.router.navigate(['/auth/login']);
  //   });
  // }

  // get isLoggedIn(): boolean {
  //   const user = JSON.parse(localStorage.getItem('user'));
  //   return (user != null && user.emailVerified != false) ? true : false;
  // }



}