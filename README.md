# CandidatureES
Le code fonctionne en javascript, il n'y a pas d'interface graphique, tout se passe dans la console du navigateur.

Exemple de création de stock  
```
stock["code"] = {"item": new Item("Nom", prix), "qty": quantité de base}
```
```
stock = [];
stock["A01"] = {"item": new Item("Smarties", 1.6), "qty": 10};
stock["A02"] = {"item": new Item("Carampar", 0.6), "qty": 5};
stock["A03"] = {"item": new Item("Avril", 2.1), "qty": 2};
stock["A04"] = {"item": new Item("KokoKola", 2.95), "qty": 1};
```
<br><br>
Exemple de création de selecta  
```
selecta = new VendingMachine(stock);
```
<br><br>
Les exemples et cas tests se trouvent dans le fichier index.html, 
par défaut aucun test n'est activé, 
pour les tester il suffit de modifier la valeur du switch pour passer entre les cas tests.
