import { Store, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "../middlewares";
import { RootState, rootReducer } from "../reducers";

export function configureStore(initialState?: RootState): Store<RootState> {
  let middleware = applyMiddleware(logger);

  if (process.env.NODE_ENV !== "production") {
    middleware = composeWithDevTools(middleware);
  }

  const store = createStore(rootReducer as any, initialState as any, middleware) as Store<
    RootState
  >;

  if ((module as any).hot) {
    (module as any).hot.accept("../reducers", () => {
      const nextReducer = require("../reducers");
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
