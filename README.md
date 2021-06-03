
<p align="center">
<img width="57%" alt="serenity-logo" src="https://user-images.githubusercontent.com/43678736/120053145-3bb87c80-bfee-11eb-967b-c3c579067522.png">
<h1 align="center">DP2 Serenity Front-End</h1>
</p>

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](#)

# Table of Contents
1. [Basic Commands](#Basic-Commands)
2. [Deploy the app](#Deploy-the-app)
3. [Commit Convention](#Commit-Convention)
4. [Deploy toAWS S3 bucket](#Deploy-to-AWS-S3-bucket)

# Basic Commands
## Install dependencies Scripts

In the project directory, you can run:
```shell
    npm install
```
## Run in development mode

In the project directory, you can run:
```shell
    npm start
```
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
## Run tests

```shell
    npm test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

# Deploy the app
## Build production app
```shell
    npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

# Commit Convention

In order to make it easy to review the previous commits and understand the "what"s and "why"s behind each change, the following commit pattern is used:

- To make descriptive commits the command `git commit -v` is used. 
- Otherwhise, `git commit -m "<message>"` command can be used when the commit message is not long enought to give it a body.

````
<type>: <subject>
<BLANK_LINE>
<body> (optional)
````

The definition for each commit section is as follows:

`<type>`: A short label of the type of change.

- It can be any of the following:
  + FEAT: A new feature
  + FIX: Bug fix
  + DOCS: Documentation changes
  + STYLE: Formatting, missing spaces, etc
  + REFACTOR: Code that it's neither a feat nor a fix

`<subject>`: It is a short description of the commit

- In general, no more than 80 characters
- Written in present tense
- Starts with capital letter

`<body>`: The long description of the commit

- Explains why the commit is needed
- Briefly explains what the commit does
- Talks about the related test cases and docs
- In general, no more than 80 characters per line


# Deploy to **_AWS S3 bucket_**:

- Deploys the app to an aws S3 bucket.

0. Follow **all** the next steps.

1. Make the build folder, wich will contain all required files for our app.

```shell
npm run build
```

<p align="center">
 <img align="center" width="60%" src="https://user-images.githubusercontent.com/43678736/115975369-e0482a00-a529-11eb-8ef5-735132a49060.png" alt="img">
</p>

2. After the execution of that command, you will be able to see a new folder: "./build".
3. Log in into your aws account and create an S3 bucket with all read permissions enabled.
4. In the created bucket, in the "properties" option switch to "enable" the option to host static web sites.

<p align="center">
 <img align="center" width="50%" src="https://user-images.githubusercontent.com/43678736/115975429-5187dd00-a52a-11eb-94b9-d1e5484cf4a4.png" alt="img">
</p>
<p align="center">
 <img align="center" width="50%" src="https://user-images.githubusercontent.com/43678736/115975457-7e3bf480-a52a-11eb-8c74-58bdcaa63465.png" alt="img">
</p>

6. Drag'n drop all the content of the "build" folder and drag them into the S3 bucket panel to start loading them.

<p align="center">
 <img align="center" width="70%" src="https://user-images.githubusercontent.com/43678736/115975524-29e54480-a52b-11eb-8cc6-af36cc8288f9.png" alt="img">
</p>
<p align="center">
 <img align="center" width="60%" src="https://user-images.githubusercontent.com/43678736/115975532-38cbf700-a52b-11eb-8814-41b5c41efe46.png" alt="img">
</p>

8. Select all files to load.
9. Allow public read to everybody.

<p align="center">
<img align="center" width="60%" src="https://user-images.githubusercontent.com/43678736/115975631-f35bf980-a52b-11eb-812f-d5193b8521ce.png" alt="img">
</p>
<p align="center">
<img align="center" width="60%" src="https://user-images.githubusercontent.com/43678736/115975644-0a9ae700-a52c-11eb-8350-0ad0b1cb6fd8.png" alt="img">
</p>

12. Once all the files have been loaded correctly, in your browser go to the corresponding URL to check the app runnig.

- The deployed app can be accesed in its URL that follows this pattern:
  **http://"bucket_name".s3-website-us-east-1.amazonaws.com/**.
