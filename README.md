# Gatsby JS personal website

### Dependencies

 - [Node 6+](https://nodejs.org/en/)
 - [GatsbyJS](https://www.gatsbyjs.org/)

### Installation

    npm install


### Development
First you will need to set the testing `ACCESS_TOKEN` and `REPO_NAME` for Prismic and `ZAPIER_URL` for the webhook in dotenv file called .env.development for the development credentials and .env.production for the production credentials. Those files should be located at the root of the project. Example:

    ACCESS_TOKEN=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    REPO_NAME=lorem-ipsum
    ZAPIER_URL=https://hooks.zapier.com/hooks/catch/XXXXXXX/XXXXXXXX/


To run the actual project:

    gatsby develop


### Distribution
To prepare the app for distribution run:

    gatsby build
    gatsby serve

### License
This project is licensed under the MIT Open Source license. For more information, see the LICENSE file in this repository.