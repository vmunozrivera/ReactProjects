
export class Contact {
    first_name = '';
    last_name = '';
    email = '';
    is_online = false;

    constructor(first_name, last_name, email, is_online){
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.is_online = is_online;
    }

}