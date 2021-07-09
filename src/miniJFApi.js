import { DataContext } from "./fetchData";
import { useContext } from "react";
import { h } from 'preact'

const objToString = (obj, key, index) => {
  return Object.entries(obj).reduce((prevObj, [valKey, valValue]) => {
    return `${prevObj}${prevObj && '&'}${key}${(index || index === 0) ? `[${index + 1}]` : ''}[${valKey}]=${valValue}`;
  }, '');
};

const FormObjectToBody = obj => 
  encodeURI(Object.keys(obj).reduce((prev, curr) => {
    const value = obj[curr];
    if (Array.isArray(value)) {
      return `${prev}${prev && '&'}${value.reduce((valPrev, valCurr, index) => {
        return `${valPrev}${valPrev && '&'}${objToString(valCurr, curr, index)}`;
      }, '')}`;
    }
    return `${prev}${prev && '&'}${objToString(value, curr)}`;
  }, ''));
export default class miniJFApi {
  constructor(apiKey, options = {}) {
    this.baseURL = options.baseURL || 'https://api.jotform.com/';
    this.apiKey = apiKey;
    this.fetchData = useContext(DataContext);
  };
  getElement(id) {
      return document.getElementById(id);
  } 
  async getForms(options = {}) {
    const { orderby = 'id' } = options;
    const url = `${this.baseURL}user/forms?apikey=${this.apiKey}&orderby=${orderby}`;
    const response = await fetch(url);
    return response.json();
  }

  async createForm(data = {}) {
    const body = FormObjectToBody(data);
    const datam = await fetch(`${this.baseURL}form?apikey=${this.apiKey}`, {
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
      "referrerPolicy": "strict-origin-when-cross-origin",
      body,
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
    return data;
  }

  async createFormIfNotExists(data = {}) {
    const results = await this.getForms();
    
    for (let i in results.content) {
      if (results.content[i].title === data.properties.title && results.content[i].status === "ENABLED") {
        data = results.content[i].id;
        return data;
      }
    }
    return this.createForm(data);
  }

  async initializeForm(pageName) {
    const formData = {
      questions: [
        {
          type: 'control_textarea',
          text: 'Type your comment',
          order: 1,
          name: 'CommentBox'
        },
        {
          type: 'control_textbox',
          text: 'Full Name',
          order: 2,
          name: 'NameBox'
        },
        {
          type: 'control_textbox',
          text: 'Replied API',
          order: 3,
          name: 'RepliedBox'
        },
        {
          type: 'control_fileupload',
          text: 'Avatar Upload',
          order: 4,
          name: 'FileUpload'
        },
        {
          type: 'control_textbox',
          text: 'Avatar URL',
          order: 5,
          name: 'URLUpload'
        }
      ],
      properties: {
        title: pageName
      }
    };
    const result = await this.createFormIfNotExists(formData);
    this.fetchData.setFormID(result);
    return result;
  }

  async addSubmission(data, formID, fetchData) {
      fetch(`${this.baseURL}form/${formID}/submissions?apikey=${this.apiKey}`, {
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
          "referrerPolicy": "strict-origin-when-cross-origin",
          "body": JSON.stringify(data),
          "method": "POST",
          "mode": "cors",
          "credentials": "omit"
          }).then(response => response.json())
          .then(data1 => {
            console.log('Success:', data1);
            fetch(`${this.baseURL}form/${formID}/submissions?apikey=${this.apiKey}&orderby=id`)
            .then((response) => {
            if (response.ok) {
              return response.json();
            }
              throw response;
            })
            .then(data2 => {
              fetchData.setData(data2);
              console.log(data2);
            })
            .catch((error) => {
              console.error("Error fetching data: ", error);
            });
    
          })
          .catch((error) => {
            console.error('Error:', error);
          });
  }

  async jotformLogin(username, password) {
    let userInfo = {
      username: "",
      avatar: ""
    }
    const datam = await fetch(`${this.baseURL}user/login`, {
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
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `username=${username}&password=${password}&access=readOnly`,
        "method": "POST",
        "mode": "cors",
        "credentials": "omit"
      })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
          throw response;
        })
        .then(data2 => {
          userInfo.username = data2.content.username;
          const avatarUrl = data2.content.avatarUrl;
          const avatar = avatarUrl.split('//');
          userInfo.avatar = `https://i2.wp.com/${avatar[2]}`; 
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
        return userInfo;
    }
  }