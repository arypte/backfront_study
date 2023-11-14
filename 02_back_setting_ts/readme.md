## 2. back_setting_ts

use express ts

npm init -y

nodemon : 코드 변경을 실시간으로 잡기 위해

[-D devDependencies]
npm i -D typescript @types/express @types/node
npm i -D nodemon ts-node

[타입스크립트 세팅]
npx tsc --init

[실행명령어]
ts-node index.ts
npx tsc && node index.js
nodemon --watch \"\*.ts\" --exec \"ts-node\" index.ts

ts = ESM ( ES Module )
import a from 'express'

js = commonJS
const a = require( 'express' )
