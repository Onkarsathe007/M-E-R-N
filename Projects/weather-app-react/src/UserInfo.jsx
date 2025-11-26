function UserInfo({user}) {
  return(
    <div>   
      {user && (
        <div style={{ marginTop: "20px", textAlign: "center",padding: "7px", }}>
          <img
            src={user.avatar_url}
            alt={user.login}
            width="100"
            style={{ borderRadius: "50%" }}
          />
          <h2>{user.name || user.login}</h2>
          <p>{user.bio}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  )
}
export default UserInfo;
