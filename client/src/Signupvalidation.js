const Signupvalidation = (values) => {
    let error={}
 const email_patt=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const password_patt=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
  if(values.name===""){error.name="Name should be entered"}

  else{
    error.name=""
  }

  if(values.email===""){error.email="Name should be entered"}

  else if(!email_patt.test(values.email)){
    error.email="email is not in correct format"
  }
  else{
    error.email=""
  }

  if(values.password===""){error.password="Name should be entered"}

  // else if(!password_patt.test(values.password)){
  //   error.password="passsword is not in correct format"
  // }
  else{
    error.password=""
  }
  return error
}

export default Signupvalidation
