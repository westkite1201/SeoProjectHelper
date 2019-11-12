import React, { ChangeEvent, MouseEvent, useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import { STORES } from '../../constants';
import CardStore from '../../stores/card/CardStore';
import { RouteComponentProps } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

interface InjectedProps {
  //[STORES.AUTH_STORE]: AuthStore;
  [STORES.CARD_STORE]: CardStore;

}


const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


function Cards(props: InjectedProps & RouteComponentProps) {
  const { cardStore } = props;
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
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
    //const { setEmail } = props[STORES.AUTH_STORE];
     //const { setEmail } = authStore;
    const { getConfig } = cardStore;
    getConfig(v.target.value);
  };

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
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Word of the Day
            </Typography>
            <Typography variant="h5" component="h2">
              be
              {bull}
              nev
              {bull}o{bull}
              lent
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              adjective
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
              {cardStore.str}
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        </div>

    </div>
  );
}

export default inject(STORES.CARD_STORE)(observer(Cards));
