import axiosInstance from "../utils/axiosInstance";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addServices } from "../utils/serviceSlice";

const useServiceCategory = () => {
  const dispatch = useDispatch();

  const services = useSelector((store) => store.service.services);

  const getServiceCategory = async () => {
    await axiosInstance
      .get("http://127.0.0.1:8000/service-categories/")
      .then((response) => {
        dispatch(addServices(response.data));
        console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  };
  useEffect(() => {
    !services && getServiceCategory();
  }, []);
};

export default useServiceCategory;
