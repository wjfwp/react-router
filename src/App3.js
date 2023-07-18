import axios from 'axios';
import { useEffect, useState } from 'react';



function App () {

  /* 
  npm install axios 설치

  나중에 aiox 공부시 반드시 참고
  https://axios-http.com/kr/docs/intro  -> 공식홈페이지
  */

  const [data, setData] = useState({});
  const handleClick = () => {
    //fetch의 반환 promise
    //axios의 반환 promise
    //결론 == 문법이 똑같다.
    axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    .then( response => setData(response.data) )
  }

  //이 데이터를 화면에 로드될때 axios로 select태그의 옵션으로 처리해보기 
  //https://raw.githubusercontent.com/yopy0817/data_example/master/by.json

  const [raw, setRaw] = useState([]);

  useEffect( () => {
    axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/by.json')
    .then( response => setRaw(response.data) )
    
  }, []);

  const option = raw.map( (item) => <option key={item.key}>{item.value}</option>);


  //async & await
  
  const handleClick2 = () => {
    //
    axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    .then(data => {
      console.log(1)

      axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json')
      .then(data => {
        console.log(3)

        axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/by.json')
        .then(data => {
          console.log(5)
        })
      })
    })

    console.log(2)
    console.log(4)
    console.log(6)
   
  }



  //1. async안에서 await을 사용할 수 있다.
  //2. function에 async를 붙이면 리턴이 프로미스가 됩니다.
  //3. 리턴이 promise라면 await을 사용할 수 있고, then절을 생략할 수 있음.
  const handleClick3 = async () => {
     // console.log( axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json') ) // 반환 = promise
     const result = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
     console.log(result); //1
 
     const result2 = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json')
     console.log(result2); //2
 
     const result3 = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/by.json')
     console.log(result3); //3
 
  }

  return ( 
    <div>
      <h3>엑시오스 사용하기</h3>

      <button onClick={handleClick}>데이터 가져오기</button>
      <button onClick={handleClick2}>어싱크확인하기</button>
      <button onClick={handleClick3}>await확인하기</button>

      <p>
        {data.userId} <br />
        {data.userPw} <br />
        {data.userName}
      </p>


      <select>
        {option}
      </select>
    </div>
  )

}

export default App