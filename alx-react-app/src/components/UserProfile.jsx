// This defines a functional component that uses props to display user information.

function UserProfile(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Bio: {props.bio}</p>
        </div>
    );
}

export default UserProfile;