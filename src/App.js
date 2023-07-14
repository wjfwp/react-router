import axios from 'axios';
import { useState } from 'react';



function App () {

  /* 
  npm install axios 설치
  */

  const [data, setData] = useState({});
  const handleClick = () => {
    //fetch의 반환 promise
    //axios의 반환 promise
    //결론 == 문법이 똑같다.
    axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    .then( response => setData(response.data) )
  }
  return ( 
    <div>
      <h3>엑시오스 사용하기</h3>

      <button onClick={handleClick}>데이터 가져오기</button>

      <p>
        {data.userId} <br />
        {data.userPw} <br />
        {data.userName}
      </p>

    </div>
  )

}

export default App