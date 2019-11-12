import * as React from 'react';
import { Provider } from 'mobx-react';
import RootStore from '../stores/RootStore';

interface IStoreProviderProps {}

const rootStore = new RootStore();

/* children = App 이 들어감  */
const StoreProvider: React.FunctionComponent<IStoreProviderProps> = ({children}) => 
    <Provider {...rootStore}>
        {children}
    </Provider>;
  
export default StoreProvider;