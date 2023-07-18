import {NavLink} from 'react-router-dom';

//b05e6761d8e749fdae5e435cd2bed513
function Category() {

  const list = [
    {name:'all',topic:'전체'},
    {name:'business',topic:'비지니스'},
    {name:'entertainment',topic:'연예'},
    {name:'general',topic:'일반'},
    {name:'health',topic:'건강'},
    {name:'sports',topic:'스포츠'},
    {name:'technology',topic:'기술'}
  ];

  const myStyle = {backgroundColor:'yellow', color:'red'};

  return (
    <div>
      <ul>
        {/* <li><Link to='xxx'>전체</Link></li> */}
        {list.map((item,index) => 
        <li key ={index}>
          <NavLink to ={item.name === 'all' ? '/' : `/${item.name}`}
                    style={({isActive}) => isActive? myStyle : undefined }
                    // style={({isActive}) => isActive && myStyle} //위에 있는 삼항연산식과 같은 내용. 더 짧은 코드.
          >{item.topic}
          </NavLink>
        </li>
        )}
      </ul>
    </div>
  )
}
export default Category