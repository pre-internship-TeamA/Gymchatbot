
const axios = require("axios")
const url = encodeURI("https://stage.coginsight.net/apis/esd/Gym_counseling/records?성별=남성");
const headers = {
    "coginsight-api-key" : `roebQelczjsdRVqwtKG6ezTZInQfBeUnrREDoy7dTrGbvwkYxJzgmVMMw6q7p83fjsCZ3cuIVbuwFcNoyhpjEQ==|pt0f0hklgSYGCL0dhmtpzF5ngvh3QPcVNDUhqGXJ1D0=` ,
    "coginsight-domain-id" : `4f33c78d-678b-4f8d-a62c-54f54061139c`
}

axios.get(url,{headers}).then((response) =>{
    console.log(response.data)
})
