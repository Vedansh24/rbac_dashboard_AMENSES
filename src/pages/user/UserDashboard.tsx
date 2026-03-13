import { SimpleBarChart } from "../../components/shared/SimpleBarChart"
import { SimpleLineChart } from "../../components/shared/SimpleLineChart"
import { DashboardWidget } from "@/components/shared/DashboardWidget"
import { PageHeader } from "@/components/shared/PageHeader"
import { StatsCard } from "@/components/shared/StatsCard"
import { Users, TrendingUp, Activity, Target, Zap } from "lucide-react"

// Sample data for charts
const weeklyActivityData = [
  { label: "Mon", value: 45 },
  { label: "Tue", value: 52 },
  { label: "Wed", value: 38 },
  { label: "Thu", value: 65 },
  { label: "Fri", value: 72 },
  { label: "Sat", value: 58 },
  { label: "Sun", value: 41 },
]

const monthlyProgressData = [
  { label: "Week 1", value: 120 },
  { label: "Week 2", value: 145 },
  { label: "Week 3", value: 168 },
  { label: "Week 4", value: 192 },
]

const performanceMetricsData = [
  { label: "Q1", value: 78 },
  { label: "Q2", value: 85 },
  { label: "Q3", value: 92 },
  { label: "Q4", value: 88 },
]

function UserDashboard() {
  return (
    <div className="space-y-8 relative">
      {/* Background decoration */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl pointer-events-none" />
      
      {/* Enhanced Header */}
      <div className="relative">
        <PageHeader 
          title="User Dashboard" 
          subtitle="Welcome back! Here's your activity overview" 
        />
        
        {/* Quick Stats Bar */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-r from-blue-500/10 to-transparent p-4 rounded-lg border border-blue-500/20">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-blue-500/20">
                <Activity className="h-4 w-4 text-blue-500" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Activity</p>
                <p className="text-lg font-bold">High</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-cyan-500/10 to-transparent p-4 rounded-lg border border-cyan-500/20">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-cyan-500/20">
                <Target className="h-4 w-4 text-cyan-500" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Goals</p>
                <p className="text-lg font-bold">85%</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500/10 to-transparent p-4 rounded-lg border border-purple-500/20">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-purple-500/20">
                <Zap className="h-4 w-4 text-purple-500" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Performance</p>
                <p className="text-lg font-bold">+12%</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-500/10 to-transparent p-4 rounded-lg border border-green-500/20">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-green-500/20">
                <TrendingUp className="h-4 w-4 text-green-500" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Growth</p>
                <p className="text-lg font-bold">+18%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Stats Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <StatsCard 
          title="New Users" 
          value="120" 
          helperText="Last 30 days" 
          icon={<Users className="h-5 w-5" />} 
          index={0}
        />
        <StatsCard 
          title="Growth Rate" 
          value="+18%" 
          helperText="Compared to previous period" 
          icon={<TrendingUp className="h-5 w-5" />} 
          index={1}
        />
        <StatsCard 
          title="Account Status" 
          value="Active" 
          helperText="All systems operational" 
          icon={<Activity className="h-5 w-5" />} 
          index={2}
        />
      </div>

      {/* Enhanced Charts Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        <DashboardWidget 
          title="Weekly Activity Analytics" 
          description="Your daily activity patterns"
        >
          <SimpleBarChart data={weeklyActivityData} color="#3b82f6" height={250} />
        </DashboardWidget>
        
        <DashboardWidget 
          title="Monthly Progress" 
          description="Weekly progress tracking"
        >
          <SimpleLineChart data={monthlyProgressData} color="#10b981" height={250} />
        </DashboardWidget>
      </div>

      {/* Performance and Metrics */}
      <div className="grid gap-6 lg:grid-cols-2">
        <DashboardWidget 
          title="Performance Metrics" 
          description="Quarterly performance trends"
        >
          <SimpleLineChart data={performanceMetricsData} color="#8b5cf6" height={250} />
        </DashboardWidget>
        
        <DashboardWidget 
          title="Account Statistics" 
          description="Your account overview"
        >
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
              <span className="text-sm font-medium">Daily Active Users</span>
              <span className="text-sm font-bold text-primary">342</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
              <span className="text-sm font-medium">Session Duration</span>
              <span className="text-sm font-bold text-primary">24m</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
              <span className="text-sm font-medium">Page Views</span>
              <span className="text-sm font-bold text-primary">1.8k</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
              <span className="text-sm font-medium">Bounce Rate</span>
              <span className="text-sm font-bold text-primary">32%</span>
            </div>
          </div>
        </DashboardWidget>
      </div>

      {/* Activity Timeline */}
      <DashboardWidget 
        title="Recent Activity" 
        description="Your latest actions and updates"
      >
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border-l-4 border-blue-500">
            <div className="p-2 rounded-lg bg-blue-500/20">
              <Users className="h-4 w-4 text-blue-500" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">Profile updated successfully</p>
              <p className="text-xs text-muted-foreground">2 hours ago</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border-l-4 border-green-500">
            <div className="p-2 rounded-lg bg-green-500/20">
              <TrendingUp className="h-4 w-4 text-green-500" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">Goal achieved: 1000 points</p>
              <p className="text-xs text-muted-foreground">5 hours ago</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border-l-4 border-purple-500">
            <div className="p-2 rounded-lg bg-purple-500/20">
              <Zap className="h-4 w-4 text-purple-500" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">New milestone unlocked</p>
              <p className="text-xs text-muted-foreground">1 day ago</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border-l-4 border-yellow-500">
            <div className="p-2 rounded-lg bg-yellow-500/20">
              <Target className="h-4 w-4 text-yellow-500" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">Weekly target completed</p>
              <p className="text-xs text-muted-foreground">2 days ago</p>
            </div>
          </div>
        </div>
      </DashboardWidget>

      {/* Achievements */}
      <DashboardWidget 
        title="Recent Achievements" 
        description="Your latest accomplishments"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <div className="text-center p-4 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
            <div className="p-3 rounded-lg bg-blue-500/20 w-fit mx-auto mb-2">
              <Activity className="h-6 w-6 text-blue-500" />
            </div>
            <p className="text-sm font-medium">Active User</p>
            <p className="text-xs text-muted-foreground">7 days streak</p>
          </div>
          
          <div className="text-center p-4 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
            <div className="p-3 rounded-lg bg-green-500/20 w-fit mx-auto mb-2">
              <TrendingUp className="h-6 w-6 text-green-500" />
            </div>
            <p className="text-sm font-medium">Top Performer</p>
            <p className="text-xs text-muted-foreground">This month</p>
          </div>
          
          <div className="text-center p-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
            <div className="p-3 rounded-lg bg-purple-500/20 w-fit mx-auto mb-2">
              <Zap className="h-6 w-6 text-purple-500" />
            </div>
            <p className="text-sm font-medium">Speed Demon</p>
            <p className="text-xs text-muted-foreground">Fast completion</p>
          </div>
        </div>
      </DashboardWidget>
    </div>
  )
}

export default UserDashboard