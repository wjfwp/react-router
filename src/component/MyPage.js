import { Navigate } from 'react-router-dom';

function MyPage() {
  const loginYN = false;

  // const nav = useNavigate();
  //if (!loginYN) {
  //loginYN 에 로그인 유무의 정보를 담았다고 가정을 하고
  //false인 경우 nav 함수를 활용하여 해당 컴포넌트에 접근하지 못하게
  // 강제로 경로이동을 시킨다. => 이 방법 안되는 이유는 아래와 같다
  //navigate혹은 렌더링 과정에서 사용이 불가능 하다.
  //nav('/');
  //}

  // to = 경로, replace = 기록을 남기는지 여부
  //아래와 같은 방법으로 리턴에 Navigate 를 이용하여 이동시킬 경로와 기록여부를 작성한다.
  if (!loginYN) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div>
      <h3>권한만 접근</h3>
    </div>
  );
}
export default MyPage;