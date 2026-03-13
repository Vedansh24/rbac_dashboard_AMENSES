import { SimpleBarChart } from "../../components/shared/SimpleBarChart"
import { SimpleLineChart } from "../../components/shared/SimpleLineChart"
import { DashboardWidget } from "@/components/shared/DashboardWidget"
import { PageHeader } from "@/components/shared/PageHeader"
import { StatsCard } from "@/components/shared/StatsCard"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useNavigate } from "react-router-dom"
import { 
  Shield, Users, Store, Settings, Database, AlertTriangle, CheckCircle, Clock, 
  DollarSign, Server, FileText, BarChart3, 
  Bell, Download, RefreshCw, Eye
} from "lucide-react"

// Sample data for comprehensive charts
const systemMetricsData = [
  { label: "00:00", value: 45 },
  { label: "04:00", value: 32 },
  { label: "08:00", value: 78 },
  { label: "12:00", value: 95 },
  { label: "16:00", value: 88 },
  { label: "20:00", value: 65 },
  { label: "24:00", value: 42 },
]

const revenueGrowthData = [
  { label: "Jan", value: 45000 },
  { label: "Feb", value: 52000 },
  { label: "Mar", value: 48000 },
  { label: "Apr", value: 61000 },
  { label: "May", value: 72000 },
  { label: "Jun", value: 85000 },
]

const userActivityData = [
  { label: "Mon", value: 1234 },
  { label: "Tue", value: 1456 },
  { label: "Wed", value: 1678 },
  { label: "Thu", value: 1890 },
  { label: "Fri", value: 2123 },
  { label: "Sat", value: 1567 },
  { label: "Sun", value: 989 },
]

// Recent activities data
const recentActivities = [
  {
    id: 1,
    type: "user_registration",
    message: "New user registration: John Doe",
    time: "2 minutes ago",
    icon: Users,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20"
  },
  {
    id: 2,
    type: "vendor_approval",
    message: "Vendor approved: Tech Solutions Inc",
    time: "15 minutes ago",
    icon: Store,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20"
  },
  {
    id: 3,
    type: "security_alert",
    message: "Security scan completed - No threats detected",
    time: "1 hour ago",
    icon: Shield,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20"
  },
  {
    id: 4,
    type: "system_update",
    message: "System update deployed successfully",
    time: "2 hours ago",
    icon: Server,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20"
  },
  {
    id: 5,
    type: "revenue_milestone",
    message: "Monthly revenue target achieved: $85,000",
    time: "3 hours ago",
    icon: DollarSign,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20"
  }
]

// System health data
const systemHealth = [
  { name: "API Server", status: "healthy", uptime: "99.9%", responseTime: "12ms", cpu: "45%", memory: "67%" },
  { name: "Database", status: "healthy", uptime: "99.8%", responseTime: "8ms", cpu: "32%", memory: "78%" },
  { name: "Cache Server", status: "maintenance", uptime: "98.5%", responseTime: "5ms", cpu: "12%", memory: "34%" },
  { name: "File Storage", status: "healthy", uptime: "99.7%", responseTime: "23ms", cpu: "8%", memory: "45%" },
  { name: "Email Service", status: "healthy", uptime: "99.6%", responseTime: "156ms", cpu: "5%", memory: "23%" }
]

function AdminDashboard() {
  const navigate = useNavigate()

  return (
    <div className="space-y-8 relative">
      {/* Background decoration */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-orange-500/10 to-red-500/10 rounded-full blur-2xl pointer-events-none" />
      
      {/* Enhanced Header */}
      <div className="relative">
        <PageHeader 
          title="Professional Admin Dashboard" 
          subtitle="Complete system overview and management tools" 
        />
        
        {/* Quick Actions Bar */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            <Button className="gap-2">
              <Users className="h-4 w-4" />
              Manage Users
            </Button>
            <Button variant="outline" className="gap-2">
              <Store className="h-4 w-4" />
              Manage Vendors
            </Button>
            <Button variant="outline" className="gap-2">
              <Settings className="h-4 w-4" />
              System Settings
            </Button>
            <Button variant="outline" className="gap-2">
              <FileText className="h-4 w-4" />
              Generate Report
            </Button>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <RefreshCw className="h-4 w-4" />
              Refresh
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
            <div className="relative">
              <Bell className="h-4 w-4 text-muted-foreground" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Navigation - Moved to Top */}
      <DashboardWidget 
        title="Quick Navigation" 
        description="Fast access to all dashboard sections"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <Users className="h-5 w-5 text-blue-500" />
                User Dashboard
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">View user analytics and management tools</p>
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-3 w-full"
                onClick={() => navigate('/user/home')}
              >
                Access User Portal
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <Store className="h-5 w-5 text-purple-500" />
                Vendor Dashboard
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Monitor vendor performance and metrics</p>
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-3 w-full"
                onClick={() => navigate('/vendor/dashboard')}
              >
                Access Vendor Portal
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <BarChart3 className="h-5 w-5 text-green-500" />
                Analytics Center
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Advanced analytics and reporting tools</p>
              <Button variant="outline" size="sm" className="mt-3 w-full">
                View Analytics
              </Button>
            </CardContent>
          </Card>
        </div>
      </DashboardWidget>

      {/* Key Metrics Overview */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard 
          title="Total Revenue" 
          value="$85,000" 
          helperText="+15% from last month" 
          icon={<DollarSign className="h-5 w-5" />} 
          index={0}
        />
        <StatsCard 
          title="Active Users" 
          value="1,240" 
          helperText="+8% growth this week" 
          icon={<Users className="h-5 w-5" />} 
          index={1}
        />
        <StatsCard 
          title="Active Vendors" 
          value="86" 
          helperText="+3 new this month" 
          icon={<Store className="h-5 w-5" />} 
          index={2}
        />
        <StatsCard 
          title="System Health" 
          value="98.5%" 
          helperText="All systems operational" 
          icon={<Shield className="h-5 w-5" />} 
          index={3}
        />
      </div>

      {/* Analytics Section */}
      <div className="grid gap-6 lg:grid-cols-3">
        <DashboardWidget 
          title="Revenue Growth" 
          description="Monthly revenue performance"
        >
          <SimpleLineChart data={revenueGrowthData} color="#10b981" height={280} />
        </DashboardWidget>
        
        <DashboardWidget 
          title="Quick Stats" 
          description="Key performance indicators"
        >
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
              <span className="text-sm font-medium">Daily Active Users</span>
              <span className="text-sm font-bold text-primary">1,234</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
              <span className="text-sm font-medium">Conversion Rate</span>
              <span className="text-sm font-bold text-primary">3.4%</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
              <span className="text-sm font-medium">Avg Session</span>
              <span className="text-sm font-bold text-primary">24m</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
              <span className="text-sm font-medium">Bounce Rate</span>
              <span className="text-sm font-bold text-primary">32%</span>
            </div>
          </div>
        </DashboardWidget>
      </div>

      {/* System Performance & User Activity */}
      <div className="grid gap-6 lg:grid-cols-2">
        <DashboardWidget 
          title="System Performance" 
          description="24-hour system metrics"
        >
          <SimpleLineChart data={systemMetricsData} color="#3b82f6" height={250} />
        </DashboardWidget>
        
        <DashboardWidget 
          title="User Activity" 
          description="Weekly user engagement"
        >
          <SimpleBarChart data={userActivityData} color="#8b5cf6" height={250} />
        </DashboardWidget>
      </div>

      {/* System Health Monitor */}
      <DashboardWidget 
        title="System Health Monitor" 
        description="Real-time system status and performance"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-3 font-medium text-sm text-muted-foreground">Service</th>
                <th className="text-left p-3 font-medium text-sm text-muted-foreground">Status</th>
                <th className="text-left p-3 font-medium text-sm text-muted-foreground">Uptime</th>
                <th className="text-left p-3 font-medium text-sm text-muted-foreground">Response</th>
                <th className="text-left p-3 font-medium text-sm text-muted-foreground">CPU</th>
                <th className="text-left p-3 font-medium text-sm text-muted-foreground">Memory</th>
                <th className="text-left p-3 font-medium text-sm text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {systemHealth.map((service, index) => (
                <tr key={index} className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <Server className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{service.name}</span>
                    </div>
                  </td>
                  <td className="p-3">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      service.status === 'healthy' ? 'bg-green-500/10 text-green-500 border border-green-500/20' :
                      service.status === 'maintenance' ? 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20' :
                      'bg-red-500/10 text-red-500 border border-red-500/20'
                    }`}>
                      {service.status === 'healthy' && <CheckCircle className="h-3 w-3 mr-1" />}
                      {service.status === 'maintenance' && <Clock className="h-3 w-3 mr-1" />}
                      {service.status === 'error' && <AlertTriangle className="h-3 w-3 mr-1" />}
                      {service.status}
                    </span>
                  </td>
                  <td className="p-3 text-sm">{service.uptime}</td>
                  <td className="p-3 text-sm">{service.responseTime}</td>
                  <td className="p-3 text-sm">{service.cpu}</td>
                  <td className="p-3 text-sm">{service.memory}</td>
                  <td className="p-3">
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <RefreshCw className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DashboardWidget>

      {/* Recent Activities & Quick Actions */}
      <div className="grid gap-6 lg:grid-cols-2">
        <DashboardWidget 
          title="Recent Activities" 
          description="Latest system events and updates"
        >
          <div className="space-y-3">
            {recentActivities.map((activity) => {
              const Icon = activity.icon
              return (
                <div key={activity.id} className={`flex items-start gap-3 p-3 rounded-lg bg-muted/30 border-l-4 ${activity.borderColor}`}>
                  <div className={`p-2 rounded-lg ${activity.bgColor}`}>
                    <Icon className={`h-4 w-4 ${activity.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{activity.message}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </DashboardWidget>
        
        <DashboardWidget 
          title="Quick Actions" 
          description="Frequently used administrative tools"
        >
          <div className="grid gap-3">
            <Button variant="outline" className="justify-start gap-3">
              <Users className="h-4 w-4" />
              <div className="text-left">
                <p className="font-medium">User Management</p>
                <p className="text-xs text-muted-foreground">Manage all user accounts</p>
              </div>
            </Button>
            
            <Button variant="outline" className="justify-start gap-3">
              <Store className="h-4 w-4" />
              <div className="text-left">
                <p className="font-medium">Vendor Management</p>
                <p className="text-xs text-muted-foreground">Approve and manage vendors</p>
              </div>
            </Button>
            
            <Button variant="outline" className="justify-start gap-3">
              <Database className="h-4 w-4" />
              <div className="text-left">
                <p className="font-medium">Database Admin</p>
                <p className="text-xs text-muted-foreground">Backup and maintenance</p>
              </div>
            </Button>
            
            <Button variant="outline" className="justify-start gap-3">
              <Shield className="h-4 w-4" />
              <div className="text-left">
                <p className="font-medium">Security Center</p>
                <p className="text-xs text-muted-foreground">Monitor security threats</p>
              </div>
            </Button>
            
            <Button variant="outline" className="justify-start gap-3">
              <FileText className="h-4 w-4" />
              <div className="text-left">
                <p className="font-medium">Generate Reports</p>
                <p className="text-xs text-muted-foreground">Create analytical reports</p>
              </div>
            </Button>
            
            <Button variant="outline" className="justify-start gap-3">
              <Settings className="h-4 w-4" />
              <div className="text-left">
                <p className="font-medium">System Settings</p>
                <p className="text-xs text-muted-foreground">Configure system parameters</p>
              </div>
            </Button>
          </div>
        </DashboardWidget>
      </div>
    </div>
  )
}

export default AdminDashboard