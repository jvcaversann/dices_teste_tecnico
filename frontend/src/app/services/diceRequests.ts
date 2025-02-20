import { api } from "../api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";

export const useRollDiceMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (diceSides: number) => {
      const response = await api.post("/api/roll", { diceSides });

      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["diceHistory"] });
    },
    onError: (error) => {
      console.error("Erro na requisição:", error);
    },
  });
};

export const useDiceHistoryQuery = (diceSides: number | null) => {
  return useQuery({
    queryKey: ["diceHistory", diceSides],
    queryFn: async () => {
      if (!diceSides) return [];
      const response = await api.get(`/api/history/${diceSides}`);
      return response.data;
    },
    enabled: !!diceSides,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
};

export const useDeleteRollMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (rollId: number) => {
      const response = await api.delete(`/api/roll/${rollId}`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["diceHistory"],
      });
    },
  });
};
