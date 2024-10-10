import React, { createContext, useEffect, useReducer } from "react";
import { cartInitialState, cartReducer } from "../reducers/cartReducer";
import { recordsInitialState, recordsReducer } from "../reducers/recordReducer";
import { usersInitialState, usersReducer } from "../reducers/userReducer";
import { getMyData } from "../api/usersApi";
import { getCartData } from "../api/cartsApi";
import { setAxiosDefaults } from "../utils/axiosConfig";
import { getAllRecords } from "../api/recordsApi.js";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [cartsState, cartsDispatch] = useReducer(cartReducer, cartInitialState);

  const [recordsState, recordsDispatch] = useReducer(
    recordsReducer,
    recordsInitialState
  );

  const [usersState, usersDispatch] = useReducer(
    usersReducer,
    usersInitialState
  );

  const { user, isUserLoggedIn } = usersState;

  useEffect(() => {
    setAxiosDefaults();
    getMyData(usersDispatch);
    getAllRecords(recordsDispatch);
  }, []);

  useEffect(() => {
    if (user.cartId) {
      getCartData(cartsDispatch, user.cartId);
    }
  }, [isUserLoggedIn, user.cartId]);

  return (
    <DataContext.Provider
      value={{
        cartsState,
        cartsDispatch,
        recordsState,
        recordsDispatch,
        usersState,
        usersDispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
