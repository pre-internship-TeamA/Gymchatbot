function Header(){
    const spogym = "images/logo.png"

    return(
        <div className ="header">
            <img src={spogym}></img>
            <p>상담 서비스</p>
        </div>
    )
}
export default Header;