import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, FileImage, Brain, Mic, Video } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Analysis = () => {
  const { toast } = useToast();
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      toast({
        title: "Analysis Complete",
        description: "Patient assessment has been processed successfully.",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground">Patient Analysis</h1>
          <p className="text-muted-foreground">
            Upload medical data for AI-powered cognitive assessment and risk evaluation.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Upload Patient Data</CardTitle>
                <CardDescription>
                  Select the type of analysis and upload relevant medical data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="imaging" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="imaging">Medical Imaging</TabsTrigger>
                    <TabsTrigger value="cognitive">Cognitive Tests</TabsTrigger>
                    <TabsTrigger value="behavioral">Behavioral Data</TabsTrigger>
                  </TabsList>

                  <TabsContent value="imaging" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="patient-id">Patient ID</Label>
                      <Input id="patient-id" placeholder="Enter patient identifier" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="scan-type">Scan Type</Label>
                      <select 
                        id="scan-type"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      >
                        <option>MRI Scan</option>
                        <option>CT Scan</option>
                        <option>PET Scan</option>
                      </select>
                    </div>

                    <div className="rounded-lg border-2 border-dashed border-border p-12 text-center transition-colors hover:border-primary">
                      <FileImage className="mx-auto h-12 w-12 text-muted-foreground" />
                      <div className="mt-4">
                        <p className="text-sm font-medium text-foreground">Upload medical imaging files</p>
                        <p className="text-xs text-muted-foreground">DICOM, PNG, or JPEG format</p>
                      </div>
                      <Button className="mt-4" variant="outline">
                        <Upload className="mr-2 h-4 w-4" />
                        Choose Files
                      </Button>
                    </div>

                    <Button className="w-full" onClick={handleAnalyze} disabled={isAnalyzing}>
                      {isAnalyzing ? (
                        <>
                          <Brain className="mr-2 h-4 w-4 animate-pulse" />
                          Analyzing...
                        </>
                      ) : (
                        <>
                          <Brain className="mr-2 h-4 w-4" />
                          Analyze Imaging
                        </>
                      )}
                    </Button>
                  </TabsContent>

                  <TabsContent value="cognitive" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="patient-id-cog">Patient ID</Label>
                      <Input id="patient-id-cog" placeholder="Enter patient identifier" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="test-type">Test Type</Label>
                      <select 
                        id="test-type"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      >
                        <option>MMSE (Mini-Mental State Examination)</option>
                        <option>MoCA (Montreal Cognitive Assessment)</option>
                        <option>CDR (Clinical Dementia Rating)</option>
                        <option>ADAS-Cog</option>
                      </select>
                    </div>

                    <div className="rounded-lg border-2 border-dashed border-border p-12 text-center transition-colors hover:border-primary">
                      <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
                      <div className="mt-4">
                        <p className="text-sm font-medium text-foreground">Upload test results</p>
                        <p className="text-xs text-muted-foreground">PDF, CSV, or Excel format</p>
                      </div>
                      <Button className="mt-4" variant="outline">
                        <Upload className="mr-2 h-4 w-4" />
                        Choose Files
                      </Button>
                    </div>

                    <Button className="w-full" onClick={handleAnalyze} disabled={isAnalyzing}>
                      {isAnalyzing ? (
                        <>
                          <Brain className="mr-2 h-4 w-4 animate-pulse" />
                          Analyzing...
                        </>
                      ) : (
                        <>
                          <Brain className="mr-2 h-4 w-4" />
                          Analyze Test Results
                        </>
                      )}
                    </Button>
                  </TabsContent>

                  <TabsContent value="behavioral" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="patient-id-beh">Patient ID</Label>
                      <Input id="patient-id-beh" placeholder="Enter patient identifier" />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-lg border-2 border-dashed border-border p-8 text-center transition-colors hover:border-primary">
                        <Mic className="mx-auto h-10 w-10 text-muted-foreground" />
                        <div className="mt-3">
                          <p className="text-sm font-medium text-foreground">Speech Recording</p>
                          <p className="text-xs text-muted-foreground">Audio files (MP3, WAV)</p>
                        </div>
                        <Button className="mt-3" size="sm" variant="outline">
                          <Upload className="mr-2 h-3 w-3" />
                          Upload
                        </Button>
                      </div>

                      <div className="rounded-lg border-2 border-dashed border-border p-8 text-center transition-colors hover:border-primary">
                        <Video className="mx-auto h-10 w-10 text-muted-foreground" />
                        <div className="mt-3">
                          <p className="text-sm font-medium text-foreground">Facial Expression</p>
                          <p className="text-xs text-muted-foreground">Video files (MP4, AVI)</p>
                        </div>
                        <Button className="mt-3" size="sm" variant="outline">
                          <Upload className="mr-2 h-3 w-3" />
                          Upload
                        </Button>
                      </div>
                    </div>

                    <Button className="w-full" onClick={handleAnalyze} disabled={isAnalyzing}>
                      {isAnalyzing ? (
                        <>
                          <Brain className="mr-2 h-4 w-4 animate-pulse" />
                          Analyzing...
                        </>
                      ) : (
                        <>
                          <Brain className="mr-2 h-4 w-4" />
                          Analyze Behavioral Data
                        </>
                      )}
                    </Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Analysis Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Brain className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Deep Learning Models</p>
                    <p className="text-xs text-muted-foreground">Advanced neural networks trained on medical datasets</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Upload className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Multiple Data Sources</p>
                    <p className="text-xs text-muted-foreground">Imaging, cognitive tests, and behavioral analysis</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-success/10 text-success">
                    <Brain className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Explainable AI</p>
                    <p className="text-xs text-muted-foreground">Transparent decision-making and interpretable results</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Privacy & Compliance</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>All patient data is encrypted and HIPAA compliant.</p>
                <p>Analysis is performed securely with full data privacy protection.</p>
                <p>Results are stored according to healthcare data regulations.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Analysis;
