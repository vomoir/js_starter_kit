import { deleteUser, getUsers } from "./api/userApi";

getUsers().then((result) => {
    let usersBody = "";

    result.forEach((user) => {
        usersBody += `<tr>
        <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
        <td>${user.id}</td>
        <td>${user.firtname}</td>
        <td>${user.lastname}</td>
        <td>${user.email}</td>
        </tr>`;
    });

    global.document.getElementById("users").innerHTML = usersBody;

    const deleteLinks = global.document.getElementsByClassName("deleteUser");

    //Must use array.from to create real array. getElementsByCLassNAme only returns 'array like' structure
    Array.from(deleteLinks, (links) => {
        links.onclick = function (event) {
            const element = event.target;
            event.preventDefault();
            deleteUser(element.attributes["data-id"].value);
            const row = element.parentNode.parentNode;
            row.parentNode.removeChild(row);
        };
    });
});
