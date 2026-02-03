import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import type { User } from "@supabase/supabase-js";

const Account = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
        
        if (!session?.user) {
          navigate("/account/login");
        }
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
      
      if (!session?.user) {
        navigate("/account/login");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Logged out",
        description: "You have been logged out successfully.",
      });
      navigate("/");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="flex items-center justify-center py-20">
          <p className="font-body text-xs text-muted-foreground">Loading...</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-background">
          <div className="max-w-[800px] mx-auto px-4 md:px-10 py-12 md:py-16">
            <h1 className="font-display text-3xl md:text-4xl text-foreground mb-8 text-center">
              My Account
            </h1>

            <div className="space-y-8">
              {/* Account Info */}
              <div className="border border-border p-6">
                <h2 className="font-display text-lg text-foreground mb-4">Account Details</h2>
                <div className="space-y-2">
                  <p className="font-body text-xs text-foreground">
                    <span className="text-muted-foreground">Email:</span> {user?.email}
                  </p>
                  <p className="font-body text-xs text-foreground">
                    <span className="text-muted-foreground">Name:</span> {user?.user_metadata?.full_name || "Not set"}
                  </p>
                  <p className="font-body text-xs text-foreground">
                    <span className="text-muted-foreground">Member since:</span>{" "}
                    {user?.created_at ? new Date(user.created_at).toLocaleDateString() : "N/A"}
                  </p>
                </div>
              </div>

              {/* Order History */}
              <div className="border border-border p-6">
                <h2 className="font-display text-lg text-foreground mb-4">Order History</h2>
                <p className="font-body text-xs text-muted-foreground">
                  You haven't placed any orders yet.
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <button
                  onClick={handleLogout}
                  className="h-12 px-8 border border-border bg-background text-foreground font-body text-xs tracking-wide hover:bg-muted transition-colors"
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Account;
