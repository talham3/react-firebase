import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { dbRef } from "utils/database";

export const useGetData = (nodeKey) => {
  const nodeRef = ref(dbRef, nodeKey);
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    onValue(nodeRef, (snapshot) => {
      snapshot?.forEach((element) => {
        const tempData = [...data] || [];
        tempData.push(element.val());
        setData([...tempData]);
        setLoading(false);
      });
    });
  }, []);

  return { isLoading, data };
};
