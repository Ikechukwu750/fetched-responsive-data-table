const tableBody = document.getElementById('table-body');

const getToDos = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    data.forEach((user) => {
      tableBody.innerHTML += `
        <tr>
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.phone}</td>
          <td>${user.website}</td>
          <td>${user?.company?.name}</td>
          <td>${user?.address?.zipcode}</td>
        </tr>`;
    });
    if(!response.ok) {
      throw new Error("Error: Something went wrong!");
    }
  } catch (err) {console.log(err);}
}

getToDos("https://jsonplaceholder.typicode.com/users");
