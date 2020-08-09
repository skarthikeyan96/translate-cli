Translate CLI

It allows you to translate the words to desired target language. I have used the google translate's cloud api to run the translations. 

Steps

1. Clone the repo to your local workstation by running the following 

    ```bash 
    git clone https://github.com/skarthikeyan96/translate-cli
    ```

2. Run the following 
    ```bash 
    cd translate-cli && npm install
    ```

3. Set up the process before running `yarn start` - [Google Translate Node repo](https://github.com/googleapis/nodejs-translate/blob/master/README.md)


4. [Set up authentication with a service account](https://cloud.google.com/docs/authentication/getting-started) so you can access the API from your local workstation.


5. Run the following , once the set up of the google cloud account and the authentication is complete.  
    ```bash 
        yarn start ${param1} ${param2}

        ${param1} -- Text to be translated
        ${param2} -- Target language
    ``` 