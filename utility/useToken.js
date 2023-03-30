import { useState } from "react";
import { GET_TOKEN_URL } from "../constant"

function isValidToken(apiCurrentTokenExpiryCode) {
    const cts = Math.floor(Date.now() / 1000);
    const cted = new Date(apiCurrentTokenExpiryCode * 1000) // convert code into expiry date
    return (cted >= cts)
}

const useToken = () => {
    const [apiToken, setApiToken] = useState('v5sRS_P_1638060005947215873s1641420755956797445');
    const [apiCurrentTokenExpiryCode, setApiCurrentTokenExpiryCode] = useState(1680180179);
    async function getToken() {
        try {
            let response = await fetch(GET_TOKEN_URL, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                method: 'POST',
            })
            let json = await response.json();
            return json;
        }
        catch (error) {
            return error;
        }
    }
    if (!isValidToken(apiCurrentTokenExpiryCode)) {
        let token = getToken();
        token.then((list) => {
            setApiToken(list.data.token)
            setApiCurrentTokenExpiryCode(list.data.expires)
        })
    } else {
        console.log(apiToken)

        return apiToken;
    }
    return apiToken;
}

export default useToken;
