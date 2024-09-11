import "./App.scss";
import { AppRouter } from "./app/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <AppRouter />
      </div>
    </QueryClientProvider>
  );
}

export default App;
