import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

export default function useAsyncThunk(thunk) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState(null);

  const doSomethingAsync = useCallback(
    (arg) => {
      setIsLoading(true);
      dispatch(thunk(arg))
        .unwrap()
        .catch((error) => {
          setErrorLoading(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    [dispatch, thunk]
  );
  return [doSomethingAsync, isLoading, errorLoading];
}
