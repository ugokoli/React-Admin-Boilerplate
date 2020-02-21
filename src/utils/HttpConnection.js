/*
 * Copyright (c) 2018.
 * Ugonna Okoli
 * ugokoli.com
 */

import axios from 'axios';
import Session from './Session';
import * as Ladda from 'ladda';

class HttpConnection {
    constructor() {
        this.connect = this.connect.bind(this);
        HttpConnection.getFormDataFromObject = HttpConnection.getFormDataFromObject.bind(this);

        this.get = this.executeResource('GET');
        this.post = this.executeResource('POST');
        this.patch = this.executeResource('PATCH');
        this.put = this.executeResource('PUT');
        this.delete = this.executeResource('DELETE');

        this.session = new Session();
    }

    executeResource(method) {
        return {
            admin: (config) => {
                config.method = method;
                this.BASE_URL = process.env.REACT_APP_API_BASE_URL;

                return this.connect(config)
            },
            set: (config, baseUrl) => {
                config.method = method;

                return this.connect(config, baseUrl)
            }
        };
    }

    connect(config, baseUrl = this.BASE_URL) {
        return new Promise((resolve, reject) => {
            Session.setLastActivityTime();

            //set default axios configuration
            axios.defaults.baseURL = baseUrl;
            axios.defaults.headers.post['Content-Type'] = 'application/json';
            if (this.session.loggedIn()) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${this.session.getToken()}`;//Bearer
            } else {
                delete axios.defaults.headers.common['Authorization'];
            }

            // Handle ladda
            let ladda = null;
            if (config.btn) {
                let btn = config.btn;
                ladda = Ladda.create(btn);
                ladda.start();

                delete config.btn;
            }

            // Set interceptor to handle unauthorized requests
            const interceptor = axios.interceptors.response.use(response => {
                return response;
            }, err => {
                if (err.response.status === 401 && err.config && !err.config.__isRetryRequest) {
                    // if you ever get an unauthorized response, logout the user (Delete JWT)
                    this.session.logout();
                }
                throw err;
            });

            //axios execution
            axios(config).then(function (response) {
                if (ladda) {
                    ladda.stop();
                }
                // BACKEND OK RESPONSE FORMAT
                // {
                //     "data": {},
                //     "message": "string"
                // }

                // axios.interceptors.response.eject(interceptor);  //eject interceptor
                resolve(response.data);
            }).catch(function (error) {
                if (ladda) {
                    ladda.stop();
                }
                // Default response
                let response = {
                    code: 400,
                    error: "",
                    message: "Error encountered"
                };

                // determine if error is normal 'request error' OR 'request cancel' was triggered
                if (axios.isCancel(error)) {
                    response.message = "Request was cancelled";
                    console.log('Request canceled', error.message);
                }else{
                    // BACKEND ERROR RESPONSE FORMAT
                    // {
                    //     "code": "string",
                    //     "error": "string",
                    //     "message": "string"
                    // }
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);

                        response.code = error.response.status;
                        response.message = error.response.data;
                        if (error.response.data && error.response.data.message) {
                            // The request was made and the server responded with a status code
                            // that falls out of the range of 2xx
                            response.error = error.response.data.error;
                            response.message = error.response.data.message;
                        }
                    } else if (error.request) {
                        // The request was made but no response was received
                        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                        // http.ClientRequest in node.js
                        console.log(error.request);
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log('Error', error.message);
                    }
                    console.log(error.config);
                }

                reject(response);
            });
        });
    }

    // when called, use 'result.token' to get token
    static generateCancelTokenSource() {
        const CancelToken = axios.CancelToken;
        return CancelToken.source();
    }

    static getFormDataFromObject(object) {
        const formData = new FormData();
        Object.keys(object).forEach(key => formData.append(key, object[key]));
        return formData;
    }
}

function httpConn () {
    return new HttpConnection();
}

export default httpConn;