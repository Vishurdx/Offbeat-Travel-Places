
import React, { useState } from 'react';
import { Download, Copy, Check, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

const DownloadHelper: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
    
    toast.success(`${type} copied to clipboard!`);
  };

  const instructions = [
    { 
      step: 1, 
      title: "Clone the repository", 
      description: "Use Git to clone the repository to your local machine.", 
      code: "git clone https://github.com/your-username/offbeat-travel-trove.git" 
    },
    { 
      step: 2, 
      title: "Navigate to project directory", 
      description: "Change to the project directory.", 
      code: "cd offbeat-travel-trove" 
    },
    { 
      step: 3, 
      title: "Install dependencies", 
      description: "Install all required packages and dependencies.", 
      code: "npm install" 
    },
    { 
      step: 4, 
      title: "Start development server", 
      description: "Run the development server to preview the website locally.", 
      code: "npm run dev" 
    },
    { 
      step: 5, 
      title: "Open in browser", 
      description: "Open your browser to view the website.", 
      code: "http://localhost:8080" 
    }
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2">
          <Download size={16} />
          Download Website
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Download & Run Locally</DialogTitle>
          <DialogDescription>
            Follow these steps to download and run this website on your VS Code or preferred code editor.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="instructions" className="mt-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="instructions">Step by Step</TabsTrigger>
            <TabsTrigger value="download">Download Options</TabsTrigger>
          </TabsList>
          
          <TabsContent value="instructions" className="space-y-4 mt-4">
            {instructions.map((instruction) => (
              <Card key={instruction.step}>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center">
                    <span className="bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center mr-2 text-sm">
                      {instruction.step}
                    </span>
                    {instruction.title}
                  </CardTitle>
                  <CardDescription>{instruction.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-3 font-mono text-sm relative">
                    {instruction.code}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-2 h-6 w-6 rounded-full bg-white/10"
                      onClick={() => handleCopy(instruction.code, `Step ${instruction.step}`)}
                    >
                      {copied === `Step ${instruction.step}` ? (
                        <Check size={14} />
                      ) : (
                        <Copy size={14} />
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="download" className="space-y-6 mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Github size={20} />
                  GitHub Repository
                </CardTitle>
                <CardDescription>
                  Download the complete source code from GitHub
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm">
                  The repository contains all the source code, assets, and configuration files needed to run this website locally.
                </p>
                <Button 
                  onClick={() => window.open("https://github.com/your-username/offbeat-travel-trove", "_blank")}
                  className="w-full"
                >
                  <Github size={16} className="mr-2" />
                  Visit GitHub Repository
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <DialogFooter className="flex items-center justify-between mt-6">
          <p className="text-sm text-gray-500">
            Need help? Check the README.md file for detailed instructions.
          </p>
          <Button variant="default" onClick={() => setOpen(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DownloadHelper;
