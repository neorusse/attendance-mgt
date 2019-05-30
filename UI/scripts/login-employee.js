/* eslint-disable func-names */
/* eslint-disable no-undef */
// Employee login

$(document).ready(function() {
  $('form').submit(function(evt) {
    evt.preventDefault();
    // get user input value
    const email = $('#email').val();
    const password = $('#password').val();

    const feedbackContainer3 = $('.feedback-container3');
    const feedbackContainer4 = $('.feedback-container4');

    if (!email || !password) {
      feedbackContainer3.html('Please enter your email and password');
      feedbackContainer3.css('color', 'red');
      feedbackContainer3.css('border', '0.7px solid #dc3545');
      feedbackContainer3.css('margin', '5px');

      setInterval(() => {
        feedbackContainer3.html(' ');
        feedbackContainer3.css('border', '');
      }, 5000);
      return;
    }

    const url = `${rootUrl}employees?email=${email}`;

    $.get(url, function(data) {
      if (data.length === 0) {
        feedbackContainer4.html('Invalid email or password');
        feedbackContainer4.css('color', 'red');
        feedbackContainer4.css('border', '0.7px solid #dc3545');
        feedbackContainer4.css('margin', '5px');

        setInterval(() => {
          feedbackContainer4.html(' ');
          feedbackContainer4.css('border', '');
        }, 5000);
        return;
      }

      const decrypted = CryptoJS.AES.decrypt(data[0].password, data[0].email);
      const decryptedPassword = decrypted.toString(CryptoJS.enc.Utf8);

      if (decryptedPassword === password) {
        sessionStorage.setItem('employee-email', email);
        sessionStorage.setItem('employee-name', data[0].firstname);
        // return;
      }

      if (data[0].employeeRole === 'admin') {
        // redirect user to dashboard
        window.location.href = './pages/admin/admin.html';
      } else {
        // redirect user to dashboard
        window.location.href = './pages/employee-profile.html';
      }
      swal({
        title: 'Error!',
        text: 'Invalid email/password details',
        icon: 'error',
        button: 'Close'
      });
    });
  });
});
