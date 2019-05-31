/* eslint-disable func-names */
/* eslint-disable no-undef */
// Logout

$(document).ready(function() {
  const logout = $('#logout');
  logout.click(function() {
    // Remove user data stored in browser's session storage
    sessionStorage.removeItem('employeeEmail');
    sessionStorage.removeItem('employeeName');

    // redirect user to Homepage
    window.location.href = '../../index.html';
  });
});
