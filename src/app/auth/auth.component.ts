import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
selector: 'app-auth',
templateUrl: './auth.component.html',
styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit 
{
    isLoggedIn = false;
    isLoginFailed = false; 
    errorMessage = '';
    userLoggedIn='';

    form = new FormGroup
    ({
        username: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
    });

    constructor
    (
        private authService: AuthService, 
        private tokenStorage:TokenStorageService, 
        private route: ActivatedRoute, 
        private router: Router
    ) { }

    get f() 
    {
        return this.form.controls;
    }

    ngOnInit(): void { }
    
    submit()
    {
        if (this.form.status === 'VALID') 
        {
            if(this.form.controls['username'].value != null && this.form.controls['password'].value != null)
            {
                this.authService.login
                (
                    this.form.controls['username'].value, 
                    this.form.controls['password'].value
                ).subscribe(
                    data => {
                    this.tokenStorage.saveToken(data);
                    this.isLoginFailed = false;
                    this.isLoggedIn = true;
                    this.userLoggedIn=<string>this.tokenStorage.getUsername();
                    this.router.navigate([{ outlets: { primary: 'navbar', contenu:'welcome' } }]);
                    },
                    err => {
                    this.errorMessage = err.error.message;
                    this.isLoginFailed = true;
                    }
                    );
            }
        }
    }
}
