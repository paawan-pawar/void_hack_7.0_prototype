import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { TrendingDown, TrendingUp, Activity, Brain, Users, AlertCircle } from "lucide-react";
import dashboardPreview from "@/assets/dashboard-preview.jpg";

const Dashboard = () => {
  const patients = [
    { id: 1, name: "John Anderson", age: 72, riskLevel: "High", score: 78, trend: "down" },
    { id: 2, name: "Mary Johnson", age: 68, riskLevel: "Medium", score: 45, trend: "stable" },
    { id: 3, name: "Robert Chen", age: 75, riskLevel: "Low", score: 22, trend: "up" },
    { id: 4, name: "Patricia Williams", age: 70, riskLevel: "High", score: 82, trend: "down" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground">Provider Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor patient assessments and track cognitive health trends.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">248</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">High Risk</CardTitle>
              <AlertCircle className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">42</div>
              <p className="text-xs text-muted-foreground">Requiring attention</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Assessments This Week</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">87</div>
              <p className="text-xs text-muted-foreground">+23% from last week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Avg Detection Accuracy</CardTitle>
              <Brain className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">94.8%</div>
              <p className="text-xs text-muted-foreground">Across all analyses</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* AI Analysis Preview */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>AI Analysis Platform</CardTitle>
              <CardDescription>
                Real-time cognitive assessment and progression tracking
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src={dashboardPreview} 
                  alt="Dashboard Preview" 
                  className="w-full rounded-lg shadow-[var(--shadow-soft)]"
                />
              </div>
            </CardContent>
          </Card>

          {/* Recent Patients */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Patient Assessments</CardTitle>
              <CardDescription>Latest cognitive health evaluations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {patients.map((patient) => (
                  <div 
                    key={patient.id} 
                    className="flex items-center justify-between rounded-lg border border-border p-4 transition-colors hover:bg-muted/50"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-foreground">{patient.name}</p>
                        <span className="text-sm text-muted-foreground">• Age {patient.age}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                          patient.riskLevel === "High" 
                            ? "bg-destructive/10 text-destructive" 
                            : patient.riskLevel === "Medium"
                            ? "bg-accent/10 text-accent"
                            : "bg-success/10 text-success"
                        }`}>
                          {patient.riskLevel} Risk
                        </span>
                        <span className="text-xs text-muted-foreground">Score: {patient.score}%</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="mb-1 flex items-center gap-1 text-sm">
                          {patient.trend === "down" ? (
                            <>
                              <TrendingDown className="h-4 w-4 text-destructive" />
                              <span className="text-destructive">Declining</span>
                            </>
                          ) : patient.trend === "up" ? (
                            <>
                              <TrendingUp className="h-4 w-4 text-success" />
                              <span className="text-success">Improving</span>
                            </>
                          ) : (
                            <span className="text-muted-foreground">Stable</span>
                          )}
                        </div>
                        <Progress value={patient.score} className="w-32" />
                      </div>
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
