import { toast } from "react-toastify";

export const loginWarn = () => {
  toast.warn("Please login to continue!", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
