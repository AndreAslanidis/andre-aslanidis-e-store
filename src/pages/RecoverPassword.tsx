import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const RecoverPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const { toast } = useToast();

  const handleRecover = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/account/reset-password`,
    });

    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } else {
      setSent(true);
      toast({
        title: "Email sent",
        description: "Check your email for the password reset link.",
      });
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
              Reset Password
            </h1>

            {sent ? (
              <div className="text-center space-y-4">
                <p className="font-body text-xs text-foreground">
                  We've sent you an email with a link to reset your password.
                </p>
                <Link
                  to="/account/login"
                  className="font-body text-xs text-foreground hover:opacity-70 transition-opacity underline underline-offset-4"
                >
                  Return to login
                </Link>
              </div>
            ) : (
              <>
                <p className="font-body text-xs text-muted-foreground mb-6 text-center">
                  We will send you an email to reset your password.
                </p>

                <form onSubmit={handleRecover} className="space-y-4">
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
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 bg-primary text-primary-foreground font-body text-xs tracking-wide hover:opacity-85 transition-opacity disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Submit"}
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <Link
                    to="/account/login"
                    className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
                  >
                    Cancel
                  </Link>
                </div>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RecoverPassword;
