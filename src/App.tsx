import { memo } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

function useSomeQuery() {
  async function fetchShit(): Promise<string[]> {
    return new Promise(resolve =>
      setTimeout(() => resolve(["a", "b", "c"]), 5000)
    );
  }
  return useQuery(["hm"], fetchShit);
}

function FetchingComponent() {
  const { data } = useSomeQuery(); // data is string[] instead of string[] | undefined. Why is that?
  return <>{data.join("-")}</>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FetchingComponent />
    </QueryClientProvider>
  );
}

export default memo(App);
