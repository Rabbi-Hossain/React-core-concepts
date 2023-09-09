export default function Some(props){
    // console.log(friend)
    const {name,email} = props.friend;
    return (
        <div className="box">
            <h3>Name: {name} </h3>
            <p>Email: {email}</p>
        </div>
    )
}
