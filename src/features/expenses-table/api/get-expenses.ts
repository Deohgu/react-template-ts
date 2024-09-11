import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Expense } from "../types/customer";
import { api } from "../../../lib/api-client";

const fetchExpenses = async (): Promise<Expense[]> => {
  const response = await api.get("/expenses", {
    headers: {
      Username: "diogo.santos",
    },
  });
  return response.data;
};

/**
 * Custom hook for fetching expenses.
 *
 * Currently returns mock data after a 0.5 second delay.
 * To use real API data, uncomment the API call in fetchExpenses
 * and comment out the mock data return and delay.
 */
export const useExpenses = (): UseQueryResult<Expense[], Error> => {
  return useQuery<Expense[], Error>({
    queryKey: ["expenses"],
    queryFn: fetchExpenses,
  });
};
