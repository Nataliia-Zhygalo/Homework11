
"use strict";

document.querySelector('button').addEventListener("click", e => {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        lastname: document.getElementById('lastname').value,
        birthdate: document.getElementById('birthdate').value,
        gender: document.querySelector('input[name="gender"]:checked').id,
        city: document.getElementById('city').value,
        address: document.getElementById('address').value,
        languages: [...document.querySelectorAll('input[type="checkbox"]:checked')].map(language => { return language.id }).join(', ')
    };

    document.querySelector('form').remove();
    renderTableFromData(formData);
})

function renderTableFromData(data) {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
  for (const key in data) {
       const th = document.createElement('th');
       const td = document.createElement('td');
       const tr = document.createElement('tr');
        
        th.innerText = key;
        td.innerText = data[key];

        tr.append(th);
        tr.append(td);

        tbody.append(tr);
    }

    table.append(tbody);
    document.querySelector('body').append(table);
}