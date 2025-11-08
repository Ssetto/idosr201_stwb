# 🚀 TP Déploiement Azure - IDOSR202

Site web statique pour le travail pratique de déploiement sur Microsoft Azure.

## 📋 Contenu du projet

```
mon-site-azure/
├── index.html      # Page principale du site
├── style.css       # Feuille de styles
├── script.js       # Code JavaScript pour l'interactivité
└── README.md       # Ce fichier
```

## 🎯 Objectifs du TP

- Apprendre à déployer un site web statique sur Azure
- Utiliser Azure Static Web Apps
- Configurer le déploiement automatique avec GitHub Actions
- Comprendre les concepts du cloud computing

## 🛠️ Technologies utilisées

- **HTML5** - Structure du site
- **CSS3** - Styles et animations
- **JavaScript** - Interactivité
- **Azure Static Web Apps** - Hébergement
- **GitHub Actions** - CI/CD

## 📦 Installation locale

1. Clonez ou téléchargez ce dépôt
2. Ouvrez le fichier `index.html` dans votre navigateur
3. C'est tout ! Aucune installation supplémentaire nécessaire

## ☁️ Déploiement sur Azure

### Étape 1 : Préparer GitHub

1. Créez un compte GitHub si vous n'en avez pas
2. Créez un nouveau dépôt (repository)
3. Uploadez tous les fichiers du projet dans ce dépôt

### Étape 2 : Créer une ressource Azure

1. Connectez-vous au [Portail Azure](https://portal.azure.com)
2. Cliquez sur **Créer une ressource**
3. Recherchez **Static Web App**
4. Cliquez sur **Créer**

### Étape 3 : Configurer le déploiement

1. **Onglet Basics** :
   - Subscription : Choisissez votre abonnement
   - Resource Group : Créez-en un nouveau (ex: `rg-tp-azure`)
   - Name : Donnez un nom unique (ex: `tp-idosr202-votrenom`)
   - Region : Choisissez la région la plus proche

2. **Onglet Deployment** :
   - Source : Sélectionnez **GitHub**
   - Autorisez Azure à accéder à votre GitHub
   - Organization : Votre compte GitHub
   - Repository : Sélectionnez votre dépôt
   - Branch : `main` ou `master`

3. **Build Details** :
   - Build Presets : **Custom**
   - App location : `/`
   - Api location : (laissez vide)
   - Output location : (laissez vide)

4. Cliquez sur **Review + Create** puis **Create**

### Étape 4 : Vérifier le déploiement

1. Attendez quelques minutes que le déploiement se termine
2. Azure va créer automatiquement un workflow GitHub Actions
3. Allez dans votre dépôt GitHub > onglet **Actions** pour voir le déploiement
4. Une fois terminé, cliquez sur **Go to resource** dans Azure
5. Cliquez sur le lien **URL** pour voir votre site en ligne !

## 🔗 Liens utiles

- [Documentation Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/)
- [Portail Azure](https://portal.azure.com)
- [GitHub](https://github.com)

## ✅ Vérification

Votre site est correctement déployé si :
- ✓ L'URL fournie par Azure affiche votre site
- ✓ Le certificat HTTPS est actif (cadenas dans le navigateur)
- ✓ Le bouton "Tester le déploiement" fonctionne
- ✓ Les modifications que vous faites sur GitHub sont déployées automatiquement

## 📝 Notes importantes

- Le déploiement initial prend 5-10 minutes
- Chaque modification sur GitHub déclenchera un nouveau déploiement
- Azure Static Web Apps offre un plan gratuit très généreux
- Le certificat SSL est automatiquement géré par Azure

## 🎓 Critères d'évaluation du TP

- [ ] Site correctement uploadé sur GitHub
- [ ] Ressource Azure Static Web App créée
- [ ] Déploiement réussi (site accessible via l'URL)
- [ ] Workflow GitHub Actions fonctionnel
- [ ] Modifications testées et déployées automatiquement

## 🆘 Dépannage

**Le site ne se déploie pas ?**
- Vérifiez que tous les fichiers sont bien dans le dépôt GitHub
- Assurez-vous que le fichier `index.html` est à la racine du projet
- Consultez les logs dans GitHub Actions

**Erreur 404 ?**
- Vérifiez la configuration "App location" dans Azure (doit être `/`)
- Assurez-vous que `index.html` est bien présent

**Le workflow GitHub Actions échoue ?**
- Vérifiez les permissions GitHub dans Azure
- Consultez les logs détaillés dans l'onglet Actions de GitHub

## 👨‍🎓 Auteur

Projet réalisé dans le cadre du TP IDOSR202 - Déploiement sur Azure

## 📄 Licence

Ce projet est libre d'utilisation à des fins éducatives.

---

**Bon déploiement ! 🚀**