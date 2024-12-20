async function fetchUsers() {
  const response = await fetch("http://localhost:3000/users")
  
  const users = await response.json();

  console.log(users);
  return users;
  showUsers(users);
}

async function showUsers(users) {
  const usersList = document.getElementById("users-List");

  users.forEach(user => {
    const listItem = document.createElement("li")

    listItem.innerHTML =`
    <div style="color: ${user.color};">
        <h2>${user.firstname} ${user.lastname}</h2>
        <p>Username: ${user.username}</p>
    </div>
    `;
    usersList.appendChild(listItem);
  });
}
fetchUsers();