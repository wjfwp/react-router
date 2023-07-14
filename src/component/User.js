import { useLocation, useSearchParams } from "react-router-dom"


function User() {

  //쿼리스트링 값을 받는 방법 1
  const location = useLocation();
  console.log(location);

  //쿼리스트링 값을 받는 방법 2
  // const obj = useSearchParams();
  // console.log(obj);
  //첫번째 인덱스 = set, get 가진 객체,
  //두번째 인덱스 = 쿼리스트링을 직접변경할 수 있는 함수
  const [obj, setObj ] = useSearchParams(); 
  //console.log(obj);
  let id = obj.get("id"); //==request.getParameter("키")
  let name = obj.get("name");

  const handleClick = () => {
    setObj({id: '변경', name: '변경'}); //이후에 렌더링
  }

  return (
    <div>
      <h3>유저 페이지</h3>
      쿼리스트링 id: {id} <br/>
      쿼리스트링 name: {name}
      <br />
      <button onClick={handleClick}>쿼리스트링제어하기</button>


    </div>
  )
}

export default User