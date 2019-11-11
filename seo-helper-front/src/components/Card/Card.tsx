import React, { ChangeEvent, MouseEvent, useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import { PAGE_PATHS, STORES } from '../../constants';
import CardStore from '../../stores/card/CardStore';
import { RouteComponentProps } from 'react-router';

interface InjectedProps {
  [STORES.CARD_STORE]: CardStore;
}

function Card(props: InjectedProps & RouteComponentProps) {
  const { cardStore, history } = props;

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
    const { getConfig } = props[STORES.CARD_STORE];
    getConfig(v.target.value);
  };
  const { str } = props[STORES.CARD_STORE];
  return (
      <div className="container container-sm container-sign">
        <form className="form-sign">
          <h5 className="form-headline">🥕 로그인 🐰</h5>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={cardStore.str}
              onChange={changeEmail}
              placeholder="이메일 입력"
            />
          </div>

        </form>
        <div>
            {str}
        </div>

    </div>
  );
}

export default inject(STORES.AUTH_STORE)(observer(Card));
