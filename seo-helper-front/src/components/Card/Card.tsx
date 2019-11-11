import React, { ChangeEvent, MouseEvent, useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import { PAGE_PATHS, STORES } from '../../constants';
import CardStore from '../../stores/card/CardStore';
import AuthStore from '../../stores/auth/AuthStore';
import { RouteComponentProps } from 'react-router';

interface InjectedProps {
 // [STORES.CARD_STORE]: CardStore;
  [STORES.AUTH_STORE]: AuthStore;

}

function Card(props: InjectedProps & RouteComponentProps) {
  const { authStore } = props;

  useEffect(() => {
    //authStore.resetPasswordAndEmail();
  }, []);

//   const handleLogin = async (e: MouseEvent) => {
//     e.preventDefault();
//     e.stopPropagation();
//     try {
//       await authStore.login();
//       history.push(PAGE_PATHS.PRODUCT_LISTS);
//     } catch (err) {
//       alert(err.response.data.msg);
//     }
//   };

  const changeEmail = (v: ChangeEvent<HTMLInputElement>) => {
    const { setEmail } = props[STORES.AUTH_STORE];
    setEmail(v.target.value);
  };

  return (
      <div className="container container-sm container-sign">
        <form className="form-sign">
          <h5 className="form-headline">🥕 로그인 🐰</h5>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={authStore.email}
              onChange={changeEmail}
              placeholder="이메일 입력"
            />
          </div>

        </form>
        <div>
            {/*str*/}
        </div>

    </div>
  );
}

export default inject(STORES.AUTH_STORE)(observer(Card));
