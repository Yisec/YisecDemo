install:
	cnpm i
	cd server; cnpm i

update:
	git add .;git stash;git stash drop;
	git pull --rebase
	make install
	npm run pro
	pm2 restart yisec

start:
	pm2 start server/app.js --name="yisec"
