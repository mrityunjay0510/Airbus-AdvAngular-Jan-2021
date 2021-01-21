import { Component } from "@angular/core";

@Component({
    selector : 'app-registration',
    templateUrl : 'registration.component.html',
    styleUrls : [ 'registration.component.css' ]
})
export class RegistrationComponent{
    public registrationModel = {
        userName : '',
        phone : '',
        email : '',
        communication : '',
        subscribe : false
    }
}