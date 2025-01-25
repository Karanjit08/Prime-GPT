import { Provider } from "react-redux";
import Body from "./component/Body";
import appStore from "./utils/appStore";


var AppLayout = () => {

  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
};

export default AppLayout;