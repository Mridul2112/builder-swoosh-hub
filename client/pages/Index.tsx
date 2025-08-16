import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, CheckCircle, Clock, AlertCircle, MessageSquare, Star, Users, Calendar, TrendingUp, Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Application {
  id: string;
  university: string;
  program: string;
  status: "submitted" | "under-review" | "interview" | "accepted" | "rejected" | "waitlisted";
  deadline: string;
  progress: number;
  country: string;
  logo: string;
}

interface Communication {
  id: string;
  counsellor: string;
  message: string;
  timestamp: string;
  type: "message" | "reminder" | "update";
  priority: "low" | "medium" | "high";
}

interface Recommendation {
  id: string;
  university: string;
  program: string;
  matchScore: number;
  reasons: string[];
  country: string;
  tuitionFee: string;
  ranking: number;
  acceptanceRate: string;
}

export default function Index() {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data - in real app this would come from APIs
  const applications: Application[] = [
    {
      id: "1",
      university: "Stanford University",
      program: "MS Computer Science",
      status: "under-review",
      deadline: "2024-12-15",
      progress: 85,
      country: "USA",
      logo: "/placeholder.svg"
    },
    {
      id: "2",
      university: "University of Cambridge",
      program: "MPhil Management",
      status: "interview",
      deadline: "2024-11-30",
      progress: 70,
      country: "UK",
      logo: "/placeholder.svg"
    },
    {
      id: "3",
      university: "University of Toronto",
      program: "MS Data Science",
      status: "accepted",
      deadline: "2024-01-15",
      progress: 100,
      country: "Canada",
      logo: "/placeholder.svg"
    },
    {
      id: "4",
      university: "ETH Zurich",
      program: "MS Computer Science",
      status: "submitted",
      deadline: "2024-12-01",
      progress: 60,
      country: "Switzerland",
      logo: "/placeholder.svg"
    }
  ];

  const communications: Communication[] = [
    {
      id: "1",
      counsellor: "Sarah Johnson",
      message: "Your Stanford application documents have been successfully submitted. Next step: prepare for potential interview.",
      timestamp: "2 hours ago",
      type: "update",
      priority: "medium"
    },
    {
      id: "2",
      counsellor: "Mike Chen",
      message: "Cambridge interview scheduled for November 28th at 2 PM GMT. Please confirm your availability.",
      timestamp: "5 hours ago",
      type: "reminder",
      priority: "high"
    },
    {
      id: "3",
      counsellor: "Sarah Johnson",
      message: "Congratulations! University of Toronto has accepted your application. Let's discuss next steps.",
      timestamp: "1 day ago",
      type: "update",
      priority: "high"
    }
  ];

  const recommendations: Recommendation[] = [
    {
      id: "1",
      university: "Carnegie Mellon University",
      program: "MS Software Engineering",
      matchScore: 95,
      reasons: ["Strong CS program", "Industry connections", "Matches your profile"],
      country: "USA",
      tuitionFee: "$58,000/year",
      ranking: 3,
      acceptanceRate: "22%"
    },
    {
      id: "2",
      university: "Imperial College London",
      program: "MSc Computing",
      matchScore: 88,
      reasons: ["Excellent research opportunities", "London location", "Strong alumni network"],
      country: "UK",
      tuitionFee: "£35,000/year",
      ranking: 8,
      acceptanceRate: "28%"
    },
    {
      id: "3",
      university: "University of Melbourne",
      program: "Master of Information Technology",
      matchScore: 82,
      reasons: ["Strong industry partnerships", "Scholarship opportunities", "Good work visa options"],
      country: "Australia",
      tuitionFee: "AUD $47,000/year",
      ranking: 14,
      acceptanceRate: "35%"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "accepted": return "bg-success text-success-foreground";
      case "submitted": return "bg-info text-info-foreground";
      case "under-review": return "bg-warning text-warning-foreground";
      case "interview": return "bg-primary text-primary-foreground";
      case "rejected": return "bg-destructive text-destructive-foreground";
      case "waitlisted": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "accepted": return <CheckCircle className="h-4 w-4" />;
      case "submitted": return <Clock className="h-4 w-4" />;
      case "under-review": return <AlertCircle className="h-4 w-4" />;
      case "interview": return <Users className="h-4 w-4" />;
      case "rejected": return <AlertCircle className="h-4 w-4" />;
      case "waitlisted": return <Clock className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-destructive text-destructive-foreground";
      case "medium": return "bg-warning text-warning-foreground";
      case "low": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold">EduTracker</h1>
                <p className="text-sm text-muted-foreground">Your Educational Journey Dashboard</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">3</Badge>
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder.svg" alt="Student" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Welcome back, John!</h2>
          <p className="text-muted-foreground">Track your applications, manage communications, and discover opportunities.</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="communications">Communications</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4</div>
                  <p className="text-xs text-muted-foreground">+1 from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Accepted</CardTitle>
                  <CheckCircle className="h-4 w-4 text-success" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1</div>
                  <p className="text-xs text-muted-foreground">25% acceptance rate</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
                  <Clock className="h-4 w-4 text-warning" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2</div>
                  <p className="text-xs text-muted-foreground">Awaiting decisions</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Unread Messages</CardTitle>
                  <MessageSquare className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">From counsellors</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Applications */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Application Updates</CardTitle>
                <CardDescription>Latest updates on your university applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {applications.slice(0, 3).map((app) => (
                    <div key={app.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={app.logo} alt={app.university} />
                          <AvatarFallback>{app.university.split(' ').map(w => w[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium">{app.university}</h4>
                          <p className="text-sm text-muted-foreground">{app.program}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <Progress value={app.progress} className="w-20 h-2" />
                          <p className="text-xs text-muted-foreground mt-1">{app.progress}% complete</p>
                        </div>
                        <Badge className={getStatusColor(app.status)}>
                          {getStatusIcon(app.status)}
                          <span className="ml-1 capitalize">{app.status.replace('-', ' ')}</span>
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Communications */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Communications</CardTitle>
                <CardDescription>Latest messages from your counsellors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {communications.slice(0, 3).map((comm) => (
                    <div key={comm.id} className="flex gap-4 p-4 border rounded-lg">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>{comm.counsellor.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">{comm.counsellor}</h4>
                          <div className="flex items-center gap-2">
                            <Badge className={getPriorityColor(comm.priority)}>{comm.priority}</Badge>
                            <span className="text-xs text-muted-foreground">{comm.timestamp}</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{comm.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applications" className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">Your Applications</h3>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input placeholder="Search applications..." className="pl-10 w-64" />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {applications.map((app) => (
                <Card key={app.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={app.logo} alt={app.university} />
                          <AvatarFallback>{app.university.split(' ').map(w => w[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">{app.university}</CardTitle>
                          <CardDescription>{app.program}</CardDescription>
                        </div>
                      </div>
                      <Badge className={getStatusColor(app.status)}>
                        {getStatusIcon(app.status)}
                        <span className="ml-1 capitalize">{app.status.replace('-', ' ')}</span>
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Application Progress</span>
                          <span>{app.progress}%</span>
                        </div>
                        <Progress value={app.progress} />
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Country:</span>
                        <span>{app.country}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Deadline:</span>
                        <span>{new Date(app.deadline).toLocaleDateString()}</span>
                      </div>
                      <Button className="w-full" variant="outline">View Details</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="communications" className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">Communications</h3>
              <Button>
                <MessageSquare className="mr-2 h-4 w-4" />
                New Message
              </Button>
            </div>

            <div className="space-y-4">
              {communications.map((comm) => (
                <Card key={comm.id}>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback>{comm.counsellor.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold">{comm.counsellor}</h4>
                          <div className="flex items-center gap-2">
                            <Badge className={getPriorityColor(comm.priority)}>{comm.priority}</Badge>
                            <Badge variant="outline">{comm.type}</Badge>
                            <span className="text-sm text-muted-foreground">{comm.timestamp}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-4">{comm.message}</p>
                        <div className="flex gap-2">
                          <Button size="sm">Reply</Button>
                          <Button size="sm" variant="outline">Mark as Read</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold">University Recommendations</h3>
                <p className="text-muted-foreground">Personalized recommendations based on your profile and preferences</p>
              </div>
              <Button variant="outline">Adjust Preferences</Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {recommendations.map((rec) => (
                <Card key={rec.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-lg">{rec.university}</CardTitle>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{rec.matchScore}%</span>
                      </div>
                    </div>
                    <CardDescription>{rec.program}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h5 className="font-medium text-sm">Why this matches you:</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {rec.reasons.map((reason, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <CheckCircle className="h-3 w-3 text-success" />
                              {reason}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Country:</span>
                          <span>{rec.country}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Ranking:</span>
                          <span>#{rec.ranking}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Acceptance Rate:</span>
                          <span>{rec.acceptanceRate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Tuition:</span>
                          <span className="font-medium">{rec.tuitionFee}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button className="flex-1">Apply Now</Button>
                        <Button variant="outline" size="icon">
                          <Star className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
