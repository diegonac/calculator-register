const emailValidation = (emailValue: string): boolean => {
  const emailRegex =
    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  if (emailRegex.test(emailValue)) {
    return true;
  } else {
    return false;
  }
};

const validateEmail = (email: string): boolean => {
  const inputEmail = document.getElementById("email-client");
  const msgLayout = document.getElementById("msg-layout");
  const isValidate = emailValidation(email);
  if (msgLayout) {
    if (!email) {
      inputEmail?.setAttribute("style", "border-color: #9d0208; border-style: solid; color: #9d0208; background-color: #db020220");
      msgLayout?.setAttribute("style", "color: #9d0208");
      msgLayout.textContent = "Debe ingresar el email del cliente";
      return false;
    }
    if (!isValidate) {
      inputEmail?.setAttribute("style", "border-color: #9d0208; border-style: solid; color: #9d0208; background-color: #db020220");
      msgLayout?.setAttribute("style", "color: #9d0208");
      msgLayout.textContent = "El email no es válido";
      return isValidate;
    }
    inputEmail?.removeAttribute("style");
    msgLayout.removeAttribute("style");
    msgLayout.textContent = "";
  }
  return isValidate;
};

export { validateEmail };
