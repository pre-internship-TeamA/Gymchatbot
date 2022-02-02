function Device(){

    const chatbot = "https://stage.coginsight.net/service/#/e62958c9-2b64-4c0a-916b-c372cad2614d?version=dev&title="
    
    return(
        <div className='device'>
            <div className='device-top' ></div>
            <iframe className='chatbot' src={chatbot}></iframe>
            <div className='device-bottom'></div>
        </div>
    )
}
export default Device;