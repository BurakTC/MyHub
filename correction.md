# Commentaires
 * Commits manquants pour l'itération 5

## Itération 1
 OK

## Itération 2
 OK

## Itération 3
 * `getPlayerPosition` inverse les coordonnées X et Y

## Itération 4
 * L'algorithme de `allOnTarget` a quelques instructions en trop.
 * Le message de fin de jeu devrait apparaître quand le dernier niveau est terminé
 * La fin de partie utilise le nombre de niveau (7) en dur dans le code au lieu de le calculer de façon dynamique depuis `levels.js`
 * Favicon non implémentée
 * Lorsqu'on recommence un niveau terminé, le message de fin de niveau ne disparaît pas

## Itération 5
 * Constructeur de `State` sans argument optionnel
 * Les seuls mouvements enregistrés sont ceux qui déplacent une boîte
 * Le compteur de mouvements est décrémenté d'une seule unité, alors que plusieurs mouvements sont potentiellement annulés d'un coup.
 * Il est possible d'annuler un mouvement après avoir terminé le niveau

## Autres
 * Plusieurs erreurs de linter
 * JSDoc incomplète ou manquante pour certaines méthodes
 
## Défense
 * Binding de recommencer/annuler : ok
 * Meilleur score : ne se met pas à jour à la fin d'un niveau mais à chaque mouvement, et considère qu'un score plus élevé est un meilleur score (c'est l'inverse). Il n'est pas placé correctement dans le stockage local.

# Evaluation 
| Question | Sur | Résultat |
| :------- | :-: | :-: |
| Itération 1 | 1 | 1 |
| Itération 2 | 2 | 2 |
| Itération 3 | 3 | 2.25 |
| Itération 4 | 7 | 5.5 |
| Itération 5 | 3 | 1.6 |
| Autres | 4 | 1.5 |
| _Total projet_ | _20_ | _13.85_ | 
| Défense | 20 | 10 |
| __Total__ | __20__ | __12__ | 
