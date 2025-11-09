import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Activity, Shield, Globe, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-10"></div>
        <div className="container relative py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
                AI-Powered Healthcare Innovation
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                Early Detection of Alzheimer's Disease
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Empowering healthcare providers with AI-driven analysis for early diagnosis, 
                progression tracking, and accessible care worldwide.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/dashboard">View Dashboard</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/analysis">Start Analysis</Link>
                </Button>
              </div>
              <div className="flex flex-wrap gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">Detection Accuracy</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">Patients Analyzed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">120+</div>
                  <div className="text-sm text-muted-foreground">Healthcare Partners</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-[var(--gradient-hero)] opacity-20 blur-2xl"></div>
              <img 
                src={heroImage} 
                alt="AI Healthcare Technology" 
                className="relative rounded-2xl shadow-[var(--shadow-medium)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-24">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Comprehensive AI Analysis
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Our platform leverages multiple data sources and advanced machine learning 
            to provide accurate, early detection of Alzheimer's disease.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="group transition-all hover:shadow-[var(--shadow-medium)]">
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Brain className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Medical Imaging Analysis</h3>
              <p className="text-muted-foreground">
                Advanced deep learning models analyze MRI, CT, and PET scans to detect early biomarkers 
                and structural changes in the brain.
              </p>
            </CardContent>
          </Card>

          <Card className="group transition-all hover:shadow-[var(--shadow-medium)]">
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <Activity className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Cognitive Assessment</h3>
              <p className="text-muted-foreground">
                AI-powered evaluation of behavioral tests, memory assessments, and cognitive function 
                to identify subtle changes over time.
              </p>
            </CardContent>
          </Card>

          <Card className="group transition-all hover:shadow-[var(--shadow-medium)]">
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-success/10 text-success group-hover:bg-success group-hover:text-success-foreground transition-colors">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Speech & Expression Analysis</h3>
              <p className="text-muted-foreground">
                Natural language processing and facial recognition to detect speech patterns and 
                expressions associated with cognitive decline.
              </p>
            </CardContent>
          </Card>

          <Card className="group transition-all hover:shadow-[var(--shadow-medium)]">
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Global Accessibility</h3>
              <p className="text-muted-foreground">
                Designed for both urban and rural healthcare environments, functioning even with 
                limited connectivity through edge AI solutions.
              </p>
            </CardContent>
          </Card>

          <Card className="group transition-all hover:shadow-[var(--shadow-medium)]">
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Progression Tracking</h3>
              <p className="text-muted-foreground">
                Continuous monitoring with intuitive dashboards that visualize patient progress and 
                cognitive decline trends for better care decisions.
              </p>
            </CardContent>
          </Card>

          <Card className="group transition-all hover:shadow-[var(--shadow-medium)]">
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-success/10 text-success group-hover:bg-success group-hover:text-success-foreground transition-colors">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Explainable AI</h3>
              <p className="text-muted-foreground">
                Transparent decision-making with interpretable AI insights, helping healthcare 
                providers understand and trust the analysis results.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-card py-24">
        <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-5"></div>
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Ready to Transform Alzheimer's Care?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Join healthcare providers worldwide in leveraging AI for early detection, 
              improved monitoring, and better patient outcomes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/dashboard">Explore Platform</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
