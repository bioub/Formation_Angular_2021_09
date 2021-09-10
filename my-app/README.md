# MyApp

## Exercice Router

Créer un nouveau module `users` avec un routing module associé

Créer 3 composants dans ce module

* `users` qui sera à la racine du module `users` (4 fichiers sans répertoire)
* `user-add`
* `user-details`

Dans le routing module de users, créer 3 routes

* `/users` pour le composant `UsersComponent`
* `/users/add` pour le composant `UserAddComponent`
* `/users/:userId` pour le composant `UserDetailsComponent`

Pour ce dernier composant, les URL contiendront un paramètre, on ne fera pas un lien vers `/users/:userId` mais par exemple `/users/123` (si l'on souhaite afficher le user dont l'id est 123)

Charger le module `UsersModule` dans `AppModule` (attention à l'ordre)

Créer un lien vers `/users` dans la top-bar

Dans le template de `UsersComponent` créer un liste de nom d'utilisateur avec des lien (ex: Jean Dupont, lien vers `/users/1`)

Ajouter également un lien vers la page `UserAdd`.

Utiliser routerLinkActive dans la top-bar et dans `UsersComponent`

## Exercice Forms

Avec l'approche de votre choix (Template Driven Form ou Reactive Form) ajoutez un formulaire dans UserAddComponent avec 3 champs :

- name
- email
- phone

Ajoutez les validateurs `required` sur `name` et `email` sur `email`.

Afficher les erreurs et mettre en forme les champs invalides.

Si le formulaire est valide et a été soumit, exécuter la requete POST vers le serveur en appelant la méthode `create` de `UserService`.

Injecter le service `Router` dans le composant (du module `@angular/router`).

Une fois la requete exécutée, appeler la méthode `navigateByUrl` (ou `navigate`) pour rediriger vers le composant `UsersComponent` (le user créé ne s'affichera pas car il n'est pas réellement créé sur le serveur).

