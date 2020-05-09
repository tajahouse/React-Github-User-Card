import React from "react";

const Header = ({onChange, update, input}) =>{
    return(
        <>
        <input type="text" placeholder="followers" value={input} onChange={onChange}/>
        <button type="submit" onClick={update}>Find Follower</button>
        </>
    )
}
export default Header;