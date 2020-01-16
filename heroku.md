### deploy heroku
npm i -g heroku
heroku login
// создаю проект с билд настройкками реакт апп
heroku create main-react --buildpack https://github.com/mars/create-react-app-buildpack.git
git push heroku master

// тут приложение
https://main-react.herokuapp.com/



#### heroku 
// просто создать проект 
heroku create (затем git remote -v чтобы посмотреть что хероку и гит сконнектились)

// посмотреть все свои apps 
heroku apps

// присоединить свое приложение к хероку
heroku git:remote -a <PASTE_YOUR_APP_NAME_HERE>

// посмотреть все buildpacks
heroku buildpacks

// удалить buildpack
heroku buildpacks:remove mars/create-react-app-buildpack

// добавить серкретный ключ
heroku config:set STRIPE_SECRET_KEY=<YOUR_STRIPE_SECRET_KEY>

// открыть плиложение на хероку
heroku open



#### heroku builds
когда деплою в хероку должен подставить в homepage в package.json "./", чтобы получить нормальные пути

// инсталлю плагины для хероку билдов
heroku plugins:install heroku-builds

// посмотреть все текущие билды в приложении
heroku builds -a main-react

// запустить билд
git push heroku master

// завершить билды
heroku builds:cancel -a main-react