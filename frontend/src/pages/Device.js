function Device(){

    const chatbot = "https://stage.coginsight.net/service/#/e62958c9-2b64-4c0a-916b-c372cad2614d?version=dev&title="
    const logo2 = "images/logo2.png"
    
    return(
        <div className='device'>
            <div className='device-top' ></div>
            <iframe className='chatbot' src={chatbot}></iframe>
            <div className='device-bottom'></div>
            <img className="logo2" src={logo2}></img>
        </div>
    )
}
export default Device;