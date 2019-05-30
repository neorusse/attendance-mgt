/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
$(document).ready(function() {
  const employeeForm = $('form');

  employeeForm.submit(function(evt) {
    evt.preventDefault();
    // Form Validation
    const validateInfo = $(this).validate({
      rules: {
        id: 'required',
        firstname: 'required',
        lastname: 'required',
        department: 'required',
        designation: 'required',
        email: {
          required: true,
          email: true
        } // end of rules
      },
      messages: {
        email: {
          required: 'please supply an e-mail address.',
          email: 'This is not a valid email address.'
        }
      } // end messages
    });
    if (validateInfo.form()) {
      const employeeEmail = $('#email').val();

      $.when($.get(`${rootUrl}employees?email=${employeeEmail}`)).then(function(data) {
        if (data.length === 0) {
          // url end point
          const url = `${rootUrl}employees`;
          // Generate new password for user
          const password = (Math.random() * 1000).toString(32).substring(3, 11);

          // Encrypt password
          const encrypted = CryptoJS.AES.encrypt(password, employeeEmail);
          const encryptedPassword = encrypted.toString();

          // Get form values
          const formData = {
            employeeRole: $('#employee-role')
              .val()
              .toLowerCase(),
            employeeId: $('#employee-id').val(),
            firstname: $('#firstname')
              .val()
              .trim()
              .toLowerCase(),
            lastname: $('#lastname')
              .val()
              .trim()
              .toLowerCase(),
            gender: $('#gender')
              .val()
              .toLowerCase(),
            department: $('#department')
              .val()
              .trim()
              .toLowerCase(),
            designation: $('#designation')
              .val()
              .trim()
              .toLowerCase(),
            email: employeeEmail,
            password: encryptedPassword,
            createdAt: new Date(),
            updatedAt: new Date()
          };
          // Create Employee
          $.ajax({
            type: 'POST',
            url,
            data: formData
          })
            .done(data => {
              $('form')[0].reset();
              const { email, firstname } = data;
              Email.send({
                Host: 'smtp.gmail.com',
                Username: 'neodendigital@gmail.com',
                Password: 'topple@12',
                To: email,
                From: 'support@neodendigital.com',
                Subject: 'User Profile Created',
                Body: `Hello ${firstname.toUpperCase()},<br><br>
          Your user profile has been created.<br><br>
          Your username is <strong>${email}</strong><br><br>
          Your password is <strong>${password}</strong><br><br>
          Warm Regards<br>
          Support`
              }).then(message => {
                swal({
                  title: 'Great!',
                  text: 'Employee created successfully',
                  icon: 'success',
                  button: 'Close'
                });
              });
            })
            .fail(err => {
              swal({
                title: 'Oops!',
                text: 'An error occurred. Please try again!',
                icon: 'error',
                button: 'Close'
              });
            });
        } else {
          swal({
            title: 'Error!',
            text: 'Employee already exist/created!',
            icon: 'error',
            button: 'Close'
          });
        }
      });
    }
  });
});
