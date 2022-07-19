import { useEffect, useState } from "react";
import { ref, set } from "firebase/database";
import { dbRef } from "utils/database";

export const useInsertData = (nodePath, { onSuccess, onError }) => {
  const nodeRef = ref(dbRef, nodePath);
  const [isLoading, setLoading] = useState(false);

  const mutate = (data) => {
    setLoading(true);
    console.log(nodeRef, data);
    set(nodeRef, data)
      .then((result) => {
        setLoading(false);
        onSuccess && onSuccess(result);
      })
      .catch((err) => {
        setLoading(false);
        onError && onError(err);
      });
  };

  return { isLoading, mutate };
};
