import './ColorBox.scss';

const ColorBox = ({ color, name, id }) => {
  const clickBox = () => {
    fetch(`http://10.58.0.22/categories/category/2/color/${id}`, {
      method: 'GET',
      // headers: { 'content-type': 'application/json' },
    })
      .then(res => res.json)
      .then(data => console.log(data));
  };

  return (
    <div className="ColorBox" onClick={clickBox}>
      <div className="colorBoxes" style={{ backgroundColor: color }}>
        <font>{name}</font>
      </div>
    </div>
  );
};

export default ColorBox;

// const test = () => {
//   fetch('http://10.58.0.32:3000/users/signin', {
//     method: 'POST',
//     headers: { 'content-type': 'application/json' },
//     body: JSON.stringify({
//       email: userInfo.email,
//       password: userInfo.password,
//     }),
//   }).then(response => {
//     if (response.status === 200) {
//       localStorage.setItem('token', response.accessToken);
//       alert('로그인 성공');
//     } else if (response.status === 400) {
//       alert('아이디 혹은 비밀번호를 확인 해 주세요');
//     }
//     return response.json();
//   });
//   // .catch(error => console.log(error));
// };
