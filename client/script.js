async function fetchUsers() {
  const response = await fetch("http://localhost:3000/users");
  const users = await response.json();

  console.log(users);
  return users;
}

function displayUsers(users) {
  const userList = document.getElementById("users-list");

  users.forEach(user => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
          <div style="background-color: ${user.color}; padding: 10px; border-radius: 10px;">
                <h3>${user.firstName} ${user.lastName}</h3>
                <p>Username: ${user.username}</p>
            </div>
      `;
      userList.appendChild(listItem);
  });
}
fetchUsers().then(users => {
  displayUsers(users);
});
