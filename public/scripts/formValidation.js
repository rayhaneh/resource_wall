function validateRegisteration(name, email, password) {
  // to be added later
  let error = ''
  return error
}



function validateLogin (email, password) {
  let error = ''
  if (!email) {
    error = 'Please provide an email address.'
  }
  else {
    if (!password) {
      error = 'Please provide a password.'
    }
  }
  return error
}




function validateNewURL (data) {
  // to be added later
  let error = ''
  return error
}
