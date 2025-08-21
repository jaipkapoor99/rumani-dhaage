import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { type Session } from "@supabase/supabase-js";

const ProtectedRoute = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthorization = async (currentSession: Session | null) => {
      if (!currentSession) {
        setSession(null);
        setIsAuthorized(false);
        setLoading(false);
        return;
      }

      setSession(currentSession);
      const userEmail = currentSession.user?.email;

      if (!userEmail) {
        setIsAuthorized(false);
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase.rpc(
          "is_admin",
          { user_email: userEmail },
          { schema: "rumani_dhaage" }
        );

        if (error) {
          console.error("Error checking whitelist:", error);
          setIsAuthorized(false);
        } else {
          setIsAuthorized(data);
        }
      } catch (err) {
        console.error("An unexpected error occurred:", err);
        setIsAuthorized(false);
      } finally {
        setLoading(false);
      }
    };

    const getSessionAndAuthorize = async () => {
      const { data } = await supabase.auth.getSession();
      await checkAuthorization(data.session);
    };

    getSessionAndAuthorize();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        checkAuthorization(session);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!session || !isAuthorized) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
