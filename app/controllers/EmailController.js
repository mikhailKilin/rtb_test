import constants from '../shared/constants'
class EmailController {
  constructor($scope) {
    this.addEmail = $scope.addEmail
    this.deleteEmail = $scope.deleteEmail
    this.emailString = ""
  }

  setInputFocus(event) {
    $('#inputFocus', event.target).focus()
  }

  innerDeleteEmail(index) {
    this.deleteEmail(index)
  }

  innerAddEmail(string) {
    this.addEmail(string)
    this.emailString = ""
  }
  
  onBlur() {
    this.innerAddEmail(this.emailString)
  }

  addEmailWithEvent($event) {
    if ($event.keyCode === constants.enter) {
      this.innerAddEmail(this.emailString)
    }
    else if ($event.keyCode === constants.comma) {
      let subEmailString = this.emailString.substr(0, this.emailString.length - 1)
      this.innerAddEmail(subEmailString)
    } else if ($event.ctrlKey && $event.keyCode === constants.letter_v) {
      this.innerAddEmail(this.emailString)
    }
  }
}

export default EmailController