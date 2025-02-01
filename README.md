<!-- local -->

npm i

.env {
    PORT
    PUBLIC_URL
    DB_URL
    TELEGRAM_API_URL
    TELEGRAM_GROUP_ID
    CLOUD_NAME
    API_KEY
    API_SECRET
    PASSWORD
}

npm run build

docker build -t arziburst/tjs-backend-3 .

docker push arziburst/tjs-backend-3

<!-- droplet -->

docker pull arziburst/tjs-backend-3

dokku git:from-image dev-api arziburst/tjs-backend-3:latest

<!-- Dokku fast docs -->
dokku [module]:[report|help] 

sudo dokku plugin:install https://github.com/dokku/dokku-postgres.git postgres
sudo dokku plugin:install https://github.com/dokku/dokku-letsencrypt.git 

dokku postgres:create db

dokku postgres:[unexpose|expose] db [?port]

dokku apps:create [dokkuContainerName]

dokku postgres:link db [dokkuContainerName]

dokku config:set [dokkuContainerName] [key=value] [key=value]...

dokku domains:[add|remove][?-global] [?dokkuContainerName] [domain]

dokku proxy:ports-[add|remove|clear] [dokkuContainerName] [?http:[port:port]]

dokku letsencrypt [dokkuContainerName]