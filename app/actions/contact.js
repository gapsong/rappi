export function submitContactForm () {
  return (dispatch) => {
    dispatch({
      type: 'CLEAR_MESSAGES'
    })
    return fetch ('/contact', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'g'
      })
    }).then((response) => {
      if (response.ok) {
        return response.json().then((json) => {
          dispatch({
            type: 'CONTACT_FORM_SUCCESS',
            messages: [json]
          })
        })
      } else {
        return response.json().then((json) => {
          dispatch({
            type: 'CONTACT_FORM_FAILURE',
            messages: Array.isArray(json) ? json : [json]
          })
        })
      }
    })
  }
}
