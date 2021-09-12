import { Injectable, Component } from '@angular/core';



import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../_auth/auth.service';
import { Observable, throwError } from 'rxjs';
import { AlertController, NavController,  ToastController} from '@ionic/angular';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
        public toastServices: ToastrService,
        private authService: AuthService,
        public alertController: AlertController,
        public navController: NavController,
        public toastController:ToastController
        
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable <HttpEvent <any> > {


    if (request.headers.get('No-Auth') === 'true') {
        if (!request.headers.has('Content-Type')) {
            request = request.clone({
                setHeaders: {
                    'content-type': 'application/json'
                }
            });
        }
        request = request.clone({
            headers: request.headers.set('Accept', 'application/json')
        });
        //   this.showLoader();

        return next.handle(request.clone())
            .pipe(
                map((event: HttpEvent<any>) => {
                    // console.log(event);
                    if (event instanceof HttpResponse) {
                    }
                    return event;
                }),
                catchError((error: HttpErrorResponse) => {
                    // console.log(error.status);
                    if (error.status === 0) {
                        //   this.showAlert();
                    }
                    if (error.status === 401) {
                        if (error.error.success === false) {
                           // this.presentToast('Your login session expired. Please login');
                            //  this.presentToast('server request failed');
                        } else {
                            this.router.navigate(['login']);
                        }

                    }
                    return throwError(error);
                }));
    } else {
        if (this.authService.loggedIn()) {
            const token = localStorage.getItem('token');
            if (token) {
                request = request.clone({
                    setHeaders: {
                        Authorization: 'Bearer ' + token
                    }
                });
            } else {
              
                return next.handle(request);
            }
            if (!request.headers.has('Content-Type')) {
                request = request.clone({
                    setHeaders: {
                        'content-type': 'application/json'
                    }
                });
            }
            request = request.clone({
                headers: request.headers.set('Accept', 'application/json')
            });
            //    this.showLoader();
            return next.handle(request).pipe(
                map((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                    }
                    return event;
                }),
                catchError((error: HttpErrorResponse) => {
                    if (error.status === 0) {
                        //  this.showAlert();
                    }
                    if (error.status === 401) {
                      // this.sessionExpired();
                    }
                    return throwError(error);
                }));


        } else {
            return next.handle(request);
        }

    }
}
async showAlert() {
    const alert = await this.alertController.create({
        header: 'Alert',
        message: 'Please check your internet connection and try again!',
        buttons: [{
            text: 'Okay',
            cssClass: 'primary',
            handler: () => {
                // console.log('Confirm Okay');
            }
        }]
    });

    await alert.present();
}

// async sessionExpired() {
//     if (!this.sessionAlert) {
//         localStorage.clear();
//         this.sessionAlert = await this.alertController.create({
//             header: 'Alert',
//             backdropDismiss: false,
//             message: 'Your login session expired. Please login again!',
//             buttons: [{
//                 text: 'Okay',
//                 cssClass: 'primary',
//                 handler: () => {
//                     this.navController.navigateRoot('/login');
//                 }
//             }]
//         });
//         await this.sessionAlert.present();
//     }
// }


async presentToast(msg: string) {
    const toast = await this.toastController.create({
        message: msg,
        duration: 3000,
        position: 'top'
    });
    toast.present();
}
}
