const express = require('express');
const cors = require('cors');

const todoRouter = require('./routes/todo');
const userRouter = require('./routes/user');

const app = express();

const port = 3010;

// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     Credentials: true,
//   })
// );
// 문을 열어둔 상태기 때문에 localhost:3000에서 오는 명령만 받게 한다.   cors가 없는 경우 다른곳에서 오는 데이터를 전혀 받지 못한다.

app.use(cors());
app.use(express.json());
// Request Body를 JSON으로 파싱할 수 있도록 합니다.

app.use('/todo', todoRouter);
//app.use('/user', userRouter);

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(port, () => {
  console.log(`Server listening on port : ${port} 🦉`);
});
