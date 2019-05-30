/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-undef */
$.get(`${rootUrl}employees?_sort=id&_order=asc`, function(data) {
  // Select table body
  const tableBody = $('.table-body');
  const formOptions = $('#employee-id');
  const formOptions1 = $('#employee-name');
  let serial = 0;

  for (const employee of data) {
    // Create nodes for table
    const id = createNode('th', ++serial);
    const firstname = createNode('td', employee.firstname);
    const lastname = createNode('td', employee.lastname);
    const gender = createNode('td', employee.gender);
    const dept = createNode('td', employee.department);
    const desig = createNode('td', employee.designation);
    const email = createNode('td', employee.email);
    const selectOptions = createNode('option', employee.id);
    const selectOptions1 = createNode('option', `${employee.firstname} ${employee.lastname}`);

    // Create edit node and append to column
    const edit = createNode('td');
    const editLink = createNode('a');
    const editIcon = createNode('li');
    editLink.href = `./edit-employee.html?email=${employee.email}`;
    editIcon.classList.add('fas', 'fa-edit');
    append(editLink, editIcon);
    append(edit, editLink);
    // Create delete node and append to column
    const remove = createNode('td');
    const removeLink = createNode('a');
    const removeIcon = createNode('li');
    removeLink.href = `./delete-employee.html?email=${employee.email}`;
    removeIcon.classList.add('fas', 'fa-trash-alt');
    append(removeLink, removeIcon);
    append(remove, removeLink);

    // Append nodes to column
    const tableRow = createNode('tr');
    append(tableRow, id);
    append(tableRow, firstname);
    append(tableRow, lastname);
    append(tableRow, gender);
    append(tableRow, dept);
    append(tableRow, desig);
    append(tableRow, email);
    append(tableRow, edit);
    append(tableRow, remove);

    // Append nodes for form options
    formOptions.append(selectOptions);
    formOptions1.append(selectOptions1);

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
