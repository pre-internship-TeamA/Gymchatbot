function Header(){
    const spogym = "images/logo.png"

    return(
        <div className ="header">
            <img src={spogym}></img>
            <p>사아앙담 서비스</p>
        </div>
    )
}
export default Header;