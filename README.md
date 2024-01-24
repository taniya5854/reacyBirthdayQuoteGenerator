# React Firebase Birthday Quote Generator

## Overview
This project involvesreact and Firebase concepts. It includes a sign-up page, Firebase authentication, and real-time database integration. The application calculates and displays the days left until a user's birthday, showing a personalized birthday message and a random quote if the birthday is today.

## Table of Contents
- [TO-DO](#to-do)
- [Setup](#setup)
- [Screenshots](#screenshots)
- [Status](#status)
- [References](#references)

## TO-DO
- [x] Create a sign-up page that collects user information.
- [x] Use a date picker for the user's birthdate.
- [x] Implement Firebase Auth and Realtime Database to store user data.
- [x] Calculate and display days left until the user's birthday.
- [x] Show a happy birthday message and a random quote if it's the user's birthday.
- [x] Display the countdown if it's not the user's birthday.
- [x] Implement user login/logout functionality.
## Setup
### Prerequisites
Make sure you have the following installed on your machine:
- Node.js
- npm (Node Package Manager)
- Visual Studio Code

### Firebase Project Setup
1. **Create a Firebase Project:**
   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Click on "Add project" and follow the instructions to create a new Firebase project.

2. **Enable Firebase Authentication:**
   - In the Firebase Console, navigate to "Authentication" and enable the desired authentication method (e.g., Email/Password).

3. **Set Up Realtime Database:**
   - In the Firebase Console, navigate to "Database" and create a Realtime Database.
   - Set up rules for your database (for testing purposes, you can start with allowing read and write access to all).

4. **Get Firebase Config:**
   - In the Firebase Console, go to "Project settings" (gear icon).
   - Under the "General" tab, find the Firebase SDK snippet and copy the configuration object.

### Code Integration
1. npm install
2. npx create-react-app app-name
3. npm install firebase
4. **Write Firebase Authentication Code:**
   - Write authentication code using the Firebase Auth SDK in your project.

5. **Write Realtime Database Code:**
   - Write code to interact with the Firebase Realtime Database using the Firebase Realtime Database SDK.
  
### GitHub Setup
1. **Initialize Git:**
   - If not already initialized, run: `git init`

2. **Create a .gitignore file:**
   - Create a .gitignore file and add entries for files and directories you don't want to include in your Git repository.

3. **Commit and Push:**
   - Add, commit, and push your code to GitHub.
## Screenshots
### SignUp Page
![SignupPage](https://github.com/taniya5854/firebaseBirthday/assets/63139873/3d19a4d0-7812-482a-8810-a3a3540f183c)


### Login Page
![loginPage](https://github.com/taniya5854/firebaseBirthday/assets/63139873/ec6544b9-093d-43e5-a852-45271cfc67fd)

### Number Of Days Left page
![NoOfDaysLeftUntilBday_Page](https://github.com/taniya5854/firebaseBirthday/assets/63139873/679e1e3d-092b-4c84-b284-d4efdc6516d9)

### Birthday Message With Quote
![bdayQuotePage](https://github.com/taniya5854/firebaseBirthday/assets/63139873/2d28afb6-4cbf-471c-85a4-448aa357d709)


### Alerts Message for Error
![AlertMessageForError](https://github.com/taniya5854/firebaseBirthday/assets/63139873/7b654729-b6f5-4003-917d-121448c4db29)

### Firebase Auth and Realtime Database dashboard
- Firebase Auth dashboard
![authenticationDashbord](https://github.com/taniya5854/firebaseBirthday/assets/63139873/9b38fce4-74f8-4935-8a02-087d50d57800)

- Firebase Realtime Database dashboard
- ![datastoredInRealTimeDatabase](https://github.com/taniya5854/firebaseBirthday/assets/63139873/311db193-ce56-4099-ac2e-c4aad81b6d0e)


## Status
Project Status: Completed

## References
- [Firebase Documentation](https://firebase.google.com/)
