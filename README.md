**# Testes de API com cypress**
```
Repositório para estudos testes API do spotify com cypress.
```

Documentação oficial do spotify: [WEB API](https://developer.spotify.com/documentation/web-api/reference/#/)

👉 **#Instalação e Comandos úteis**

`npm install cypress` ou `npm install cypress --save-dev` (instalará localmente)

`npx cypress open`: Abrir o test runner do cypress; 

`npm install`: pra instalar dependências necessárias para o cypress após o git clone;

`npx cypress install --force`: Casos ocorra problemas na instalação atualize as dependências e execute o comando;

**#Evite**

- Rodar o teste de criar playlist pois o spotify não tem um end point para deletar segue a fonte da documentação: [Link oficial do spotify sobre](https://developer.spotify.com/documentation/general/guides/working-with-playlists/) 