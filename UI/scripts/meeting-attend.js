/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
$(document).ready(function() {
  const attendanceForm = $('form');

  attendanceForm.submit(function(evt) {
    evt.preventDefault();
    // Form Validation
    const validateInfo = $(this).validate({
      rules: {
        meetingname: 'required'
      },
      messages: {
        meetingname: {
          required: 'please supply name of meeting.'
        }
      } // end messages
    });
    if (validateInfo.form()) {
      const employeeId = $('#employee-id').val();

      $.when($.get(`${rootUrl}attendance?id=${employeeId}`)).then(function(data) {
        if (data.length === 0) {
          // url end point
          const url = `${rootUrl}attendance`;

          // Get form values
          const formData = {
            employId: employeeId,
            employeeName: $('#employee-name').val(),
            meetingName: $('#meeting-name')
              .val()
              .trim()
              .toLowerCase(),
            createdAt: new Date()
          };
          // Create Employee
          $.ajax({
            type: 'POST',
            url,
            data: formData
          })
            .done(data => {
              $('form')[0].reset();
            })
            .then(message => {
              swal({
                title: 'Great!',
                text: 'Meeting Attendance recorded',
                icon: 'success',
                button: 'Close'
              });
            });
        } else {
          swal({
            title: 'Error!',
            text: 'Attendance already taken',
            icon: 'error',
            button: 'Close'
          });
        }
      });
    }
  });
});
