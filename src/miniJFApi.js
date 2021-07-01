import { DataContext } from "./fetchData";

export default class miniJFApi {


  
    constructor(apiKey) {
        this.apiKey = apiKey;
        var baseURL = "api.jotform.com";
    };


    getElement(id) {
        return document.getElementById(id);
    }
    
    async getForms() {
        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.jotform.com/user/forms?apikey=${apiKey}&orderby=id`);

        return response.json();
    }

    buildFormData(formData, data, parentKey) {
        if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
          Object.keys(data).forEach(key => {
            this.buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
          });
        } else {
          const value = data == null ? '' : data;
      
          formData.append(parentKey, value);
        }
      }
      
      jsonToFormData(data) {
        const formData = new FormData();
        
        this.buildFormData(formData, data);
        
        return formData;
      }


    async createForm(data) {
        // var formData = new FormData();
        // var properties = {
        // title: "testy test"
        // };
        // formData.append("properties", properties);
        var exists = false;

        const results = await this.getForms();
        // async fetch(`https://cors-anywhere.herokuapp.com/https://api.jotform.com/user/forms?apikey=${apiKey}&orderby=id`).then(response => response.json())
        // .then(result => {
        //     for (let i in result.content) {
        //         if (result.content[i].title === data && result.content[i].status === "ENABLED") {
        //           console.log('found')
        //           exists = true;
        //           break;
        //         }
        //     }
        // }
        // );
        console.log(results);

        for (let i in results.content) {
            if (results.content[i].title === data && results.content[i].status === "ENABLED") {
              data = results.content[i].id;
              console.log('found')
              exists = true;
              break;
            }
        }

        console.log(data);

        if (!exists) {
          const datam = await fetch(`https://cors-anywhere.herokuapp.com/https://api.jotform.com/form?apikey=${apiKey}`, {
            "headers": {
                "accept": "application/json, text/javascript, */*; q=0.01",
                "accept-language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": "https://cors-anywhere.herokuapp.com/https://api.jotform.com/docs/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": `questions%5B1%5D%5Btype%5D=control_textarea&questions%5B1%5D%5Btext%5D=Type+your+comment&questions%5B1%5D%5Border%5D=2&questions%5B1%5D%5Bname%5D=CommentBox&properties%5Btitle%5D=${data}&questions%5B2%5D%5Btype%5D=control_fullname&questions%5B2%5D%5Btext%5D=Full+Name&questions%5B2%5D%5Border%5D=3&questions%5B2%5D%5Bname%5D=NameBox&questions%5B3%5D%5Btype%5D=control_textbox&questions%5B3%5D%5Btext%5D=Replied+Api&questions%5B3%5D%5Border%5D=3&questions%5B3%5D%5Bname%5D=RepliedBox&questions%5B4%5D%5Btype%5D=control_fileupload&questions%5B4%5D%5Btext%5D=Avatar+Upload&questions%5B4%5D%5Border%5D=4&questions%5B4%5D%5Bname%5D=FileUpload&questions%5B7%5D%5Btype%5D=control_number&questions%5B7%5D%5Btext%5D=Reply+Num&questions%5B7%5D%5Border%5D=7&questions%5B7%5D%5Bname%5D=replyNum`,
            "method": "POST",
            "mode": "cors",
            "credentials": "omit"
            }).then(response => response.json())
            .then(data1 => {
              console.log('Success:', data1);
              data = data1.content.id;
            })
            .catch((error) => {
              console.error('Error:', error);
            });
        }
        return data;
    }


    addQuestion() {
        fetch(`https://cors-anywhere.herokuapp.com/https://api.jotform.com/form/211726571802958/questions?apikey=${apiKey}`, {
            "headers": {
                "accept": "application/json, text/javascript, */*; q=0.01",
                "accept-language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": "https://cors-anywhere.herokuapp.com/https://api.jotform.com/docs/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "question%5Btype%5D=control_textarea",
            "method": "POST",
            "mode": "cors",
            "credentials": "omit"
            });
    }

    addSubmission(data, formID, fetchData) {
        fetch(`https://cors-anywhere.herokuapp.com/https://api.jotform.com/form/${formID}/submissions?apikey=${apiKey}`, {
            "headers": {
                "accept": "application/json, text/javascript, */*; q=0.01",
                "accept-language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": "https://cors-anywhere.herokuapp.com/https://api.jotform.com/docs/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": JSON.stringify(data),
            "method": "POST",
            "mode": "cors",
            "credentials": "omit"
            }).then(response => response.json())
            .then(data1 => {
              console.log('Success:', data1);
              fetch(`https://cors-anywhere.herokuapp.com/https://api.jotform.com/form/${formID}/submissions?apikey=${apiKey}&orderby=id`)
              .then((response) => {
              if (response.ok) {
                return response.json();
              }
                throw response;
              })
              .then(data2 => {
                console.log('ben degistim 55555', data2)
                fetchData.setData(data2);
                console.log(fetchData.data);
              })
              .catch((error) => {
                console.error("Error fetching data: ", error);
              });
      
            })
            .catch((error) => {
              console.error('Error:', error);
            });
    
    }
    getAllSubmissions(cb) {
        var data = [];
        fetch(`https://cors-anywhere.herokuapp.com/https://api.jotform.com/form/211726571802958/submissions?apikey=${apiKey}&orderby=id`, {
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
        }).then(response => response.json())
        .then(outcome => cb(outcome));
        // .then(json => {
        //   console.log('Success:', json);
        // //   (json.content).forEach(element => {
        // //     data.push( element.answers[1].name );
        // //     data.push(element.answers[1].order);
        // //     data.push( element.answers[1].type);
        // //     data.push( element.answers[1].answer);  
        // //   });
        //   for (let i in json.content) {
        //     data.push( json.content[i].answers[1].name );
        //     data.push(json.content[i].answers[1].order);
        //     data.push( json.content[i].answers[1].type);
        //     data.push( json.content[i].answers[1].answer);  
        //   }
        //   console.log(data);
        //   return "data";
        // })
        // .catch((error) => {
        //   console.error('Error:', error);
        // });
    }

}