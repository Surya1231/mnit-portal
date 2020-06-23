import { toast } from "react-toastify";

export const loginWarn = (
  msg = "Please login to continue!",
  duration = 3000
) => {
  toast.warn(msg, {
    position: "top-right",
    autoClose: duration,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const errorNoty = (msg = "Something Went Wrong", duration = 3000) => {
  toast.error(msg, {
    position: "top-right",
    autoClose: duration,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const successNoty = (msg = "Successfully Done", duration = 3000) => {
  toast.success(msg, {
    position: "top-right",
    autoClose: duration,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
