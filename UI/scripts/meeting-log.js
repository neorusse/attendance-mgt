/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-undef */
$.get(`${rootUrl}attendance?_sort=id&_order=asc`, function(data) {
  // Select table body
  const tableBody = $('.table-body');
  let serial = 0;

  for (const attend of data) {
    // Create nodes for table
    const id = createNode('th', ++serial);
    const employeeName = createNode('td', attend.employeeName);
    const meetingName = createNode('td', attend.meetingName);
    const date = createNode('td', formatDate(attend.createdAt));

    // Append nodes to column
    const tableRow = createNode('tr');
    append(tableRow, id);
    append(tableRow, employeeName);
    append(tableRow, meetingName);
    append(tableRow, date);

    // Append row to table body
    tableBody.append(tableRow);
  }
});

// Create html element with textContent
function createNode(element, text) {
  const node = document.createElement(element);
  if (text) {
    node.innerHTML = `${text}`;
  }
  return node;
}
// Append child to parent
function append(parent, el) {
  return parent.appendChild(el);
}

// Date formatting
function formatDate(date) {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };

  const dateObj = new Date(date);
  return dateObj.toLocaleDateString('en-US', options);
}
