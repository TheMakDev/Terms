

function ProfilePicture(){
    const imageurl ="./src/assets/image.jpg"

    const handleClick = ()=> console.log("OUCH")

    return(<img onClick={handleClick} src={imageurl}></img>)
}
export default ProfilePicture