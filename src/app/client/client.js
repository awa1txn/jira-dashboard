import axios from "axios";


const apiClient = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/character'
})

// Add a request interceptor

apiClient.interceptors.request.use(
    async function (config) {
    
    /*
    
    THIS IS CODE FOR AUTHORISED USER

    switch (config.url) {
        default:
        config.headers.Authorization =
            'Bearer ' + STORED_BEARER_TOKEN_VARIABLE;
    }
    */


      // Modify the request config before sending the request
      // For example, you can add headers or modify the URL
      // config.headers['Authorization'] = 'Bearer your-token';
  
      return config;
    },
    function (error) {
      // Handle request errors
      return Promise.reject(error);
    }
  );
  
  // Add a response interceptor
  apiClient.interceptors.response.use(
    function (response) {
      // Handle the response data
      // For example, you can parse the response or transform it before returning
      // response.data = transformResponse(response.data);
  
      return response;
    },
    function (error) {
      // Handle response errors
      return Promise.reject(error);
    }
  );
  
  
  export default apiClient;