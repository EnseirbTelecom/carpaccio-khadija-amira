# Le carpaccio d’API
API de calcul de prix

## Installation
`npm install`

## Utilisation
Lancer le serveur: `npm start`

Lancer les test avec couverture: `npm test`

Lancer l'analyse par mutation : `npm run mutation`

Accèder à la documentation de l'API  à l'adresse: http://localhost:3002/api_docs

## Livraisons:
# Version V1.0.0
La requête GET \id retourne l'id de l'API, en l'occurrence, "carpaccio-khadija-amira".
Elle peut être testé en ligne de commande en utilisant `Curl` avec:
```javascript
curl -i -X GET localhost:3002/id
```
ou en utilisant `Postman` ou `Insomnia`.
# Version V1.1.0
Implémentation de la requête POST \bill qui retourne le prix total. Elle prend comme argument deux tableaux `prices` et `quantities`.
Elle peut être testée en ligne de commande en utilisant `Curl` avec:
```javascript
curl -i -X POST -H 'Content-Type: application/json' -d '{"prices": [10,20], "quantities" : [1,2]}' localhost:3002/bill
```
# Version V2.0.0
Amélioration de la version précédente en prenant le code du pays en tant que paramètre supplémentaire (obligatoire), et en appliquant la TVA correspondante au total.
Elle peut être testée en ligne de commande en utilisant `Curl` avec:
```javascript
curl -i -X POST -H 'Content-Type: application/json' -d '{"prices": [10,20], "quantities" : [1,2], "country" : "ES" }' localhost:3002/bill
```
# Version V2.1.0
Prise en compte de la réduction lors du calcul du prix total en prenant `discpunt` comme un autre paramètre (optionnel cette fois).
Elle peut être testée en ligne de commande en utilisant `Curl` avec:
```javascript
curl -i -X POST -H 'Content-Type: application/json' -d '{"prices" : [15.99], "quantities" : [1], "country" : "ES", "discount" : "NO_DISCOUNT"}' localhost:3002/bill
```

# Version V2.2.0
Une API de clcul des cours a été utilisée pour calculer le prix dans la devise spécifiée par le paramètre optionnel `currency`.
La requête peut être testée en ligne de commande en utilisant `Curl` avec:
```javascript
curl -i -X POST -H 'Content-Type: application/json' -d '{ "prices" : [15.99, 11.99], "quantities" : [1, 2], "country" : "ES", "discount" : "NO_DISCOUNT", currency: "CAD"}' localhost:3002/bill
```

## Équipe
+ AL KTABE Amera
+ ABDELOUALI Khadija
