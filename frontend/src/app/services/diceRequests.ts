import { api } from "../api";
import { useMutation } from "@tanstack/react-query";

export const useRollDiceMutation = () => {
  return useMutation({
    mutationFn: async (diceSides: number) => {
      const response = await api.post("/api/roll", { diceSides });

      return response.data;
    },
    onError: (error) => {
      console.error("Erro na requisição:", error);
    },
  });
};
