import EmailController from '../controllers/EmailController'
import html from '../html/inputEmail.html'
export const emailsEditor = () => {
  return {
    restrict: "E",
    template: html,
    scope: {
      emails: "=",
      addEmail: "=",
      deleteEmail: '='
    },
    controller: EmailController,
    controllerAs: 'emailCtrl'
  }
}

export default emailsEditor