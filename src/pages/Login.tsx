import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";

const Login = () => {
  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/admin`,
      },
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-xs text-center">
        <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
        <Button onClick={handleGoogleLogin}>Login with Google</Button>
      </div>
    </div>
  );
};

export default Login;