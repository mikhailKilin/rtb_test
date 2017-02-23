export default function emailChecker() {
        this.checker = (email:string):boolean => {
            var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,6})$/;
            return reg.test(email);
        }
    }