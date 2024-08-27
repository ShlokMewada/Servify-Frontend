import axiosInstance from "../utils/axiosInstance";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOnlyServices } from "../utils/serviceSlice";

const useService = () => {
  const dispatch = useDispatch();

  const onlyServices = useSelector((store) => store.service.onlyServices);

  const getService = async () => {
    await axiosInstance
      .get("http://127.0.0.1:8000/services/")
      .then((response) => {
        dispatch(addOnlyServices(response.data));
        console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  };
  useEffect(() => {
    !onlyServices && getService();
  }, []);
};

export default useService;
