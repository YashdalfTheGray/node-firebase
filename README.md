# node-firebase

Putting node and firebase together to see how it all works.

## Installation

Clone the repository and then run `npm install` to install all the prerequisites.

## Running

There are a few details required by the application to connect to firebase. They can be located in the Firebase console after selecting a project. Copy the `.env.example` file, rename it to `.env` and then put those details in the file.

A package called `dotenv` will load up those details as environment variables and error if they are not found.
