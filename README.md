# Pengu Bot

## ⚠ Warning 

Do not leak your discord token to any party whom you do not want having full access to your account/bot account.
## What is this?

This project is a **Discord bot** written in **[Node JS](https://nodejs.org/)** used to make my life easier.


## ⛓ Installation
1) Create a Discord account and get the token
2) Clone the repository and navigate in the folder
3) Install all the modules with `npm i`
4) Configure the bot with your personnal creditentials in the .env file
* Values to provide: 
  * Token
	  * The bot account token
  * Client ID
	  * The bot account client id
  * Guild ID
      * The id of the guild the bot will be used in
  * Auto Role ID
      * The id of the role that every new server member will be given upon join
  * Role Name
      * The name of the role that will be used to send newsletters to server members
  * News Letter File *
      * The file name and extension of the newsletter file which is to be placed in the main directory of the bot
  * Calendar File *
      * The file name and extension of the calendar file which is to be placed in the main directory of the bot
  * Admin Email
      * The contact email of the admin whom the users of the bot should contact if need be

## 👌 Usage

1) Open two terminals in the main directory of the bot
2) In the first terminal paste **`node .\bot.js`**
3) In the second directory paste **`node .\deploy-commands.js`**

Subsequently you can upload the bot files to a web hosting service to host the bot online.

* Commands:
  * /help

## TODO
1) Schedule command
2) Syllabus/Grading command
3) Google Calendar integration*
4) Notes web hook integration*