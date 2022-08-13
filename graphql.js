import fetch from "node-fetch";

(async function() {
  console.time('start')
  const response = await fetch("https://graphql.us.fauna.com/graphql", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
      "authorization": "Basic Zm5BRXQwTE5HaEFBVEdIUzFKQ3FHVUpiUUxKVkpULWJtTHNDNDhjbDp3b3JrZXItZmF1bmEtdXMtMTphZG1pbg==",
      "cache-control": "no-cache",
      "content-type": "application/json",
      "pragma": "no-cache",
      "sec-ch-ua": "\"Chromium\";v=\"104\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"104\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "Referer": "https://dashboard.fauna.com/",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": "{\"operationName\":null,\"variables\":{},\"query\":\"{\\n  findProductsByID(id: \\\"339823214366556235\\\") {\\n    _id\\n    title\\n    quantity\\n    weightLbs\\n    serialNumber\\n  }\\n}\\n\"}",
    "method": "POST"
  });
  const res = await response.json()
  console.log({res: res.data.findProductsByID})
  console.timeEnd('start')  
})()  