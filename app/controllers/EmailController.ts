import * as $ from 'jquery'

interface IController {
    addEmails(emails:string[]):void
    getEmails():string[]
}

class EmailString {
    public name:string;
    public order:number;
    public isValid:boolean;

    constructor(name:string, order:number, isValid:boolean) {
        this.name = name;
        this.order = order;
        this.isValid = isValid;
    }
}

class EmailController implements IController {

    emails:Array<EmailString>;
    emailString:string;

    constructor() {
        this.emails = new Array<EmailString>()
        this.emailString = "";
    }

    addEmails(emails:string[]):void {
        var newOrder = emails.length + 1;
        emails.forEach(element => {
            this.emails.push(new EmailString(element, newOrder++, this.isValid(element)));
        });
    }

    getEmails():string[] {
        return this.emails.map(function (item) {
            return item.name
        });
    }

    addEmail(emailString:string):void {
        if (emailString.length > 0) {
            var newOrder = this.emails.length == 0 ? 1 : this.emails[this.emails.length - 1].order + 1;
            this.emails.push(new EmailString(emailString, newOrder, this.isValid(emailString)));
            this.emailString = "";
        }
    }

    addEmailWithEvent($event:KeyboardEvent):void {
        if ($event.keyCode === 13) {
            this.addEmail(this.emailString);
        }
        else if ($event.keyCode === 188) {
            var subEmailString = this.emailString.substr(0, this.emailString.length - 1);
            this.addEmail(subEmailString);
        }
        else if(($event.ctrlKey || $event.metaKey) && ($event.which == 86 || $event.which==118)){
            console.log('ctrl+v')
        }
    }

    setInputFocus(event:MouseEvent):void {
        $('#inputFocus', event.target).focus();
    }

    deleteEmailString(order:number):void {
        var deleteOrder = 0;
        for (var i = 0; i < this.emails.length; i++) {
            if (this.emails[i].order == order) {
                deleteOrder = i;
                break;
            }
        }
        this.emails.splice(deleteOrder, 1);
    }

    isValid(email:string):boolean {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,6})$/;
        return reg.test(email);
    }

    getRandomEmail():string[] {
        var text = "";
        var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < Math.floor(Math.random() * possible.length); i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        text += "@ya.ru";
        return [text];
    }

    getEmailsCount():void {
        alert("Emails count is " + this.emails.length);
    }
}

export default EmailController