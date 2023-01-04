# atelier-20
Objectifs :

Développer une API web simple avec Express
 

Sujet :

Dans cet atelier, vous allez développer une API web avec Express permettant de simuler des opérations bancaires.

Tout d'abord, commencez par créer un dossier accounts contenant des fichiers utilisateurs nommés id_utilisateur.js, où  id_utilisateur est l'identifiant de l'utilisateur. Chaque utilisateur doit avoir la forme suivante : {"id": 1, "firstname": "John", "lastname": "Doe", "email": "john.doe@test.com", "password": "....", "accounts": [{
"id": 1, "balance": 1000}, {"id": 2, "balance": 2000}]}

 

L'API web devra proposer les routes suivantes :

- POST /login : Permettant à l'utilisateur d'obtenir un token JWT à l'aide de son id et de son mot de passe.

- GET /accounts : Permettant à l'utilisateur d'obtenir la liste de ses comptes

- GET /accounts/balance/:accountId : Permettant à l'utilisateur connecté d'obtenir le solde d'un de ses comptes par Id

- POST /accounts : Permettant à l'utilisateur de créer un compte dont le solde inital sera à 0

- PUT /accounts/transfer : Permettant à l'utilisateur de transférer une somme d'un de ses comptes à un autre, si l'opération est possible

 

Les échanges seront exclusivement effectués en JSON.

 

BONUS : Les mots de passe devront idéalement être hashé à l'aide de Bcrypt https://www.npmjs.com/package/bcrypt .
