import { SimpleBarChart } from "../../components/shared/SimpleBarChart"
import { SimpleLineChart } from "../../components/shared/SimpleLineChart"
import { DashboardWidget } from "@/components/shared/DashboardWidget"
import { PageHeader } from "@/components/shared/PageHeader"
import { StatsCard } from "@/components/shared/StatsCard"
import { Package, ShoppingCart, TrendingUp, DollarSign, Truck, Star, AlertCircle } from "lucide-react"

// Sample data for charts
const dailyOrdersData = [
  { label: "Mon", value: 12 },
  { label: "Tue", value: 18 },
  { label: "Wed", value: 22 },
  { label: "Thu", value: 16 },
  { label: "Fri", value: 27 },
  { label: "Sat", value: 20 },
  { label: "Sun", value: 15 },
]

const monthlyRevenueData = [
  { label: "Jan", value: 12000 },
  { label: "Feb", value: 14500 },
  { label: "Mar", value: 16800 },
  { label: "Apr", value: 15200 },
  { label: "May", value: 18900 },
  { label: "Jun", value: 21400 },
]

const customerSatisfactionData = [
  { label: "Q1", value: 4.2 },
  { label: "Q2", value: 4.5 },
  { label: "Q3", value: 4.7 },
  { label: "Q4", value: 4.8 },
]

function VendorDashboard() {
  return (
    <div className="space-y-8 relative">
      {/* Background decoration */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-pink-500/10 to-purple-500/10 rounded-full blur-2xl pointer-events-none" />
      
      {/* Enhanced Header */}
      <div className="relative">
        <PageHeader 
          title="Vendor Dashboard" 
          subtitle="Manage your business and track performance metrics" 
        />
        
        {/* Quick Stats Bar */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-r from-purple-500/10 to-transparent p-4 rounded-lg border border-purple-500/20">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-purple-500/20">
                <DollarSign className="h-4 w-4 text-purple-500" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Revenue</p>
                <p className="text-lg font-bold">$12.4k</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-pink-500/10 to-transparent p-4 rounded-lg border border-pink-500/20">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-pink-500/20">
                <ShoppingCart className="h-4 w-4 text-pink-500" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Orders</p>
                <p className="text-lg font-bold">27</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-indigo-500/10 to-transparent p-4 rounded-lg border border-indigo-500/20">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-indigo-500/20">
                <Truck className="h-4 w-4 text-indigo-500" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Delivery</p>
                <p className="text-lg font-bold">94%</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-500/10 to-transparent p-4 rounded-lg border border-green-500/20">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-green-500/20">
                <Star className="h-4 w-4 text-green-500" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Rating</p>
                <p className="text-lg font-bold">4.8</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Stats Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <StatsCard 
          title="Total Orders" 
          value="27" 
          helperText="This week" 
          icon={<ShoppingCart className="h-5 w-5" />} 
          index={0}
        />
        <StatsCard 
          title="Fulfillment Rate" 
          value="94%" 
          helperText="On-time delivery" 
          icon={<Package className="h-5 w-5" />} 
          index={1}
        />
        <StatsCard 
          title="Growth Trend" 
          value="+9%" 
          helperText="Week over week" 
          icon={<TrendingUp className="h-5 w-5" />} 
          index={2}
        />
      </div>

      {/* Enhanced Charts Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        <DashboardWidget 
          title="Daily Orders Analytics" 
          description="Orders received per day this week"
        >
          <SimpleBarChart data={dailyOrdersData} color="#8b5cf6" height={250} />
        </DashboardWidget>
        
        <DashboardWidget 
          title="Monthly Revenue Trends" 
          description="Revenue performance over time"
        >
          <SimpleLineChart data={monthlyRevenueData} color="#10b981" height={250} />
        </DashboardWidget>
      </div>

      {/* Customer Satisfaction and Business Metrics */}
      <div className="grid gap-6 lg:grid-cols-2">
        <DashboardWidget 
          title="Customer Satisfaction" 
          description="Quarterly customer rating trends"
        >
          <SimpleLineChart data={customerSatisfactionData} color="#f59e0b" height={250} />
        </DashboardWidget>
        
        <DashboardWidget 
          title="Business Metrics" 
          description="Key performance indicators"
        >
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
              <span className="text-sm font-medium">Monthly Revenue</span>
              <span className="text-sm font-bold text-primary">$48,250</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
              <span className="text-sm font-medium">Avg Order Value</span>
              <span className="text-sm font-bold text-primary">$156</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
              <span className="text-sm font-medium">Customer Retention</span>
              <span className="text-sm font-bold text-primary">87%</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
              <span className="text-sm font-medium">Profit Margin</span>
              <span className="text-sm font-bold text-primary">23%</span>
            </div>
          </div>
        </DashboardWidget>
      </div>

      {/* Recent Orders */}
      <DashboardWidget 
        title="Recent Orders" 
        description="Latest customer orders and their status"
      >
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border-l-4 border-green-500">
            <div className="p-2 rounded-lg bg-green-500/20">
              <ShoppingCart className="h-4 w-4 text-green-500" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">Order #1234 - Delivered</p>
              <p className="text-xs text-muted-foreground">Customer: John Doe • $234.50</p>
            </div>
            <div className="text-right">
              <span className="text-xs text-green-500 font-medium">Completed</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border-l-4 border-blue-500">
            <div className="p-2 rounded-lg bg-blue-500/20">
              <Truck className="h-4 w-4 text-blue-500" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">Order #1235 - In Transit</p>
              <p className="text-xs text-muted-foreground">Customer: Jane Smith • $189.00</p>
            </div>
            <div className="text-right">
              <span className="text-xs text-blue-500 font-medium">Shipping</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border-l-4 border-yellow-500">
            <div className="p-2 rounded-lg bg-yellow-500/20">
              <Package className="h-4 w-4 text-yellow-500" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">Order #1236 - Processing</p>
              <p className="text-xs text-muted-foreground">Customer: Bob Wilson • $412.75</p>
            </div>
            <div className="text-right">
              <span className="text-xs text-yellow-500 font-medium">Processing</span>
            </div>
          </div>
        </div>
      </DashboardWidget>

      {/* Alerts & Notifications */}
      <DashboardWidget 
        title="Business Alerts" 
        description="Important notifications and action items"
      >
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
            <AlertCircle className="h-4 w-4 text-red-500" />
            <div className="flex-1">
              <p className="text-sm font-medium text-red-500">Low Inventory Alert</p>
              <p className="text-xs text-muted-foreground">5 items below stock threshold</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
            <Star className="h-4 w-4 text-yellow-500" />
            <div className="flex-1">
              <p className="text-sm font-medium text-yellow-500">New Review Received</p>
              <p className="text-xs text-muted-foreground">5-star rating from Sarah Johnson</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
            <TrendingUp className="h-4 w-4 text-blue-500" />
            <div className="flex-1">
              <p className="text-sm font-medium text-blue-500">Sales Milestone</p>
              <p className="text-xs text-muted-foreground">You've reached $50k in monthly sales!</p>
            </div>
          </div>
        </div>
      </DashboardWidget>
    </div>
  )
}

export default VendorDashboard