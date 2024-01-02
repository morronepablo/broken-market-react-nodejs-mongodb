import { useMutation } from "@tanstack/react-query";
import { loginApi } from "./loginApi";

export const loginUser = () => {
  const { mutate, isLoading } = useMutation({
    mutationFn: (data) => loginApi(data),
    onSuccess(data) {
      // localStorage.setItem("brokangToken", data.token)
      console.log(data);
    },
  });

  return { mutate, isLoading };
};
