import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Target, Heart, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              About NeuroDetect AI
            </h1>
            <p className="text-lg text-muted-foreground">
              Revolutionizing Alzheimer's detection through artificial intelligence and accessible healthcare technology.
            </p>
          </div>

          <div className="mb-16 space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h2 className="mb-4 text-2xl font-bold text-foreground">Our Mission</h2>
                <p className="text-muted-foreground">
                  Alzheimer's disease affects millions worldwide, yet traditional detection methods remain costly, 
                  complex, and often delayed. NeuroDetect AI bridges this critical gap by providing an AI-powered 
                  platform that makes early detection accessible, affordable, and accurate for healthcare providers 
                  in both urban centers and under-resourced rural areas.
                </p>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Brain className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">Advanced Technology</h3>
                  <p className="text-muted-foreground">
                    Our platform leverages state-of-the-art deep learning models trained on extensive medical 
                    datasets, achieving 95% accuracy in early detection of Alzheimer's biomarkers.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">Precision Analysis</h3>
                  <p className="text-muted-foreground">
                    Multi-modal analysis combining medical imaging (MRI, CT, PET), cognitive assessments, 
                    and behavioral data for comprehensive patient evaluation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-success/10 text-success">
                    <Heart className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">Patient-Centered Care</h3>
                  <p className="text-muted-foreground">
                    Empowering healthcare providers and families with intuitive dashboards and actionable 
                    insights for better decision-making and improved patient outcomes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Globe className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">Global Accessibility</h3>
                  <p className="text-muted-foreground">
                    Edge AI capabilities enable offline functionality in low-connectivity zones, making 
                    advanced diagnostics accessible in remote and underserved communities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="mb-12">
            <CardContent className="pt-6">
              <h2 className="mb-4 text-2xl font-bold text-foreground">Technical Innovation</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  NeuroDetect AI incorporates cutting-edge machine learning technologies including:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <strong className="text-foreground">Convolutional Neural Networks (CNNs)</strong> for medical 
                    imaging analysis, detecting subtle structural changes in brain tissue
                  </li>
                  <li>
                    <strong className="text-foreground">Natural Language Processing (NLP)</strong> to analyze speech 
                    patterns and detect cognitive impairments through conversation
                  </li>
                  <li>
                    <strong className="text-foreground">Facial Recognition AI</strong> for detecting micro-expressions 
                    and behavioral changes associated with cognitive decline
                  </li>
                  <li>
                    <strong className="text-foreground">Explainable AI (XAI)</strong> frameworks providing transparent, 
                    interpretable results that healthcare providers can trust and understand
                  </li>
                  <li>
                    <strong className="text-foreground">Edge Computing</strong> solutions enabling local processing 
                    for data privacy and low-connectivity environments
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="mb-4 text-2xl font-bold text-foreground">Impact & Reach</h2>
              <div className="grid gap-6 sm:grid-cols-3">
                <div className="text-center">
                  <div className="mb-2 text-4xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">Patients Analyzed</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-4xl font-bold text-accent">120+</div>
                  <div className="text-sm text-muted-foreground">Healthcare Partners</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-4xl font-bold text-success">45</div>
                  <div className="text-sm text-muted-foreground">Countries Served</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
