import { h } from 'preact'

export default function getSubmissions(props) {
    var apiKey = props.apiKey;
        var obj;
        const allComments = fetch(`https://cors-anywhere.herokuapp.com/https://api.jotform.com/form/211726571802958/submissions?apikey=446878e07510e8b079996bcde82ee265&orderby=id`, {
            "headers": {
              "accept": "application/json, text/javascript, */*; q=0.01",
              "accept-language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
              "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
              "sec-ch-ua-mobile": "?0",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin",
              "x-requested-with": "XMLHttpRequest"
            },
            "referrer": "https://cors-anywhere.herokuapp.com/https://api.jotform.com/docs/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "omit"
        }).then(data => data.json())
        .then(response => {obj = response
        //   console.log('Success:', response);
        var data = [];
          (response.content).forEach(element => {
            data.push( element.answers[1].name );
            data.push(element.answers[1].order);
            data.push( element.answers[1].type);
            data.push( element.answers[1].answer);  
          });
        //   for (let i in response.content) {
        //     data.push( response.content[i].answers[1].name );
        //     data.push(response.content[i].answers[1].order);
        //     data.push( response.content[i].answers[1].type);
        //     data.push( response.content[i].answers[1].answer);  
        //   }
        //   console.log(data);
          console.log("data here", data)
    }
        )
        .then(() => console.log(obj))
        .catch((error) => {
          console.error('Error:', error);
        });
        
        console.log(obj)
    return (
        <div>
            { allComments }
        </div>
    )
}


