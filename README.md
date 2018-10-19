## Deckbuilder

An app created to enable users to save extra Hearthstone decks, as the game itself limits you to 18. This way users can keep their favorite decks as they transition from Standard format to Wild and recall old decks with ease.

## Link to Live Application:

Heroku: https://hs-deckbuilder-mg.herokuapp.com/

Server Repo: https://github.com/MitchGianoni/hsdeckbuilder-server

## Dummy User:

Username: tester1
password: bacon123

## Screenshots:
** Login Page **
![image](/SCREENSHOTS/login.png)
** Dashboard **
![image](/SCREENSHOTS/dashboard.png)
** Deckbuilder **
![image](/SCREENSHOTS/deckbuilder.png)

## Tech Stack:
- Client:
  - React
  - React-Router-Dom
  - Redux
  - Redux-Form
  - Redux-Thunk
- Server:
  - Express
  - Postgresql
  - Knex
  - Node
  - bcrypt/jwt/passport

- All cards imported into database from api.hearthstonejson.com

## Future Features:

- Enable users to rename decks
- Search cards by name
- Deck limitations to reflect actual game rules
- Paste and save deck codes directly into app! (stretch goal)