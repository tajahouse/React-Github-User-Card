import React from "react";

const UserData = ({users}) =>{
    return (
        <div className="user-wrapper">
            <h1>Name: {users.name}</h1>
            <img src={users.avatar_url} alt="Profile Image"/>
    <p>Followers: {users.followers}</p>
    <p>Following: {users.following}</p>
    <a href={users.html_url} alt="Profile url">Github Profile</a>


        </div>
    )
}
export default UserData;
