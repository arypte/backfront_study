const express = require('express');
const cors = require('cors');

const port = 3010;
// 포트 번호는 임의로 , 프론트엔드에서 3000쓰니까

const app = express();
/*
모듈화
Express 애플리케이션을 생성하면 기본적으로 필요한 설정들이 이미 포함되어 있기 때문에,
express()로 바로 사용하면 추가적인 설정이 필요할 경우 번거로울 수 있습니다.
const app = express()를 사용하면 기본적인 설정이 포함된 애플리케이션 객체를 쉽게 생성하고,
이후에 필요한 설정들을 추가해나갈 수 있습니다.
*/

app.use(cors);
app.use(express.json());
// express.json 으로 입력들어오는걸 쓸 수 있게 함.
