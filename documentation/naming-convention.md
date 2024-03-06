# Convention de nommage

Ces conventions sont amenées à être modifiées via l'équipe.

## Noms des variables

Les variables de type boolean sont préfixées par `is` :

```typescript
const loading = false; //Exemple incorrect
const isLoading = false; // Exemple correct
```

 ## Noms des components

Respectez la casse en PascalCase pour les composants Vue.js, ce qui implique de commencer chaque mot par une majuscule et de ne pas inclure d'espaces entre les mots.

 ```html
 <MyComponent />
 ```

 Utiliser deux mots pour éviter des conflits de nommage avec des mots réservés par Vue.

```javascript
export default {
  name: 'Todo', // Exemple incorrect
  // ...
}

export default {
  name: 'TodoItem', // Exemple correct
  // ...
}
```

