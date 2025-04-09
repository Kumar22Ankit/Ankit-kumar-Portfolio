import { QueryClientProvider } from "@tanstack/react-query";
import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { queryClient } from "./lib/queryClient";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import { useEffect } from "react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Import AOS (Animate On Scroll) library
  useEffect(() => {
    const aosScript = document.createElement("script");
    aosScript.src = "https://unpkg.com/aos@next/dist/aos.js";
    aosScript.async = true;
    document.body.appendChild(aosScript);

    aosScript.onload = () => {
      // Initialize AOS once loaded
      // @ts-ignore
      window.AOS && window.AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
      });
    };

    return () => {
      if (document.body.contains(aosScript)) {
        document.body.removeChild(aosScript);
      }
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
