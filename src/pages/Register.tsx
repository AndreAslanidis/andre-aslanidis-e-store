import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: window.location.origin,
        data: {
          full_name: `${firstName} ${lastName}`.trim(),
        },
      },
    });

    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Account created",
        description: "Please check your email to verify your account.",
      });
      navigate("/account/login");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-background">
          <div className="max-w-[400px] mx-auto px-4 md:px-10 py-12 md:py-16">
            <h1 className="font-display text-3xl md:text-4xl text-foreground mb-8 text-center">
              Create Account
            </h1>

            <form onSubmit={handleRegister} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="h-12 border-border bg-background font-body text-xs placeholder:text-muted-foreground rounded-none focus-visible:ring-1 focus-visible:ring-foreground"
                />
                <Input
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="h-12 border-border bg-background font-body text-xs placeholder:text-muted-foreground rounded-none focus-visible:ring-1 focus-visible:ring-foreground"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 border-border bg-background font-body text-xs placeholder:text-muted-foreground rounded-none focus-visible:ring-1 focus-visible:ring-foreground"
                />
              </div>
              <div>
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="h-12 border-border bg-background font-body text-xs placeholder:text-muted-foreground rounded-none focus-visible:ring-1 focus-visible:ring-foreground"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-primary text-primary-foreground font-body text-xs tracking-wide hover:opacity-85 transition-opacity disabled:opacity-50"
              >
                {loading ? "Creating account..." : "Create"}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="font-body text-xs text-muted-foreground">
                Already have an account?{" "}
                <Link
                  to="/account/login"
                  className="text-foreground hover:opacity-70 transition-opacity underline underline-offset-4"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
