import { Component, ElementRef } from 'angular2/core';
import { FORM_DIRECTIVES, Validators, Control, ControlGroup, FormBuilder } from 'angular2/common';
interface Login {
    email: string;
    password: string;
}
@Component({
    selector: 'signin-modal',
    template: require('./signinModal.html'),
    styles: [require('./signinModal.styl').toString()],
    directives: [FORM_DIRECTIVES]
})
export class SigninModal {
    email: Control;
    name: Control;
    password: Control;
    form: ControlGroup;

    signinWindowOpen: Boolean;
    login: Login = { email: '', password: '' };
    
    constructor(public _elem: ElementRef, private builder: FormBuilder) {
        this.signinWindowOpen = false;
        this.name = new Control('', Validators.required);
        this.email = new Control('', Validators.required);
        this.password = new Control('', Validators.minLength(5));

        this.form = builder.group({
            name: this.name,
            email: this.email,
            password: this.password
        });
    }

    signinWindowToggle() {
        console.log(this.login);
        console.log(this._elem.nativeElement);
        if (this._elem.nativeElement.className !== 'signin_box') {
            this.signinWindowOpen = false;
        }
        console.log(this.signinWindowOpen);
    }
    submit(type) {
        
    }
}