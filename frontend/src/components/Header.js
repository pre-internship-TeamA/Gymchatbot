function Header(){
    const spogym = "images/spogym.png"

    return(
        <div className ="header">
            <img src={spogym} width="300px" height="56px"></img>
            <sapn>상담 서비스</sapn>
        </div>
    )
}
export default Header;