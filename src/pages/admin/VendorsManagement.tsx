import { PageHeader } from "@/components/shared/PageHeader"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Store, Plus, Search, Filter, MoreVertical, Edit, Trash2, Shield, AlertCircle, Star, TrendingUp } from "lucide-react"

// Sample vendor data
const vendorsData = [
  {
    id: 1,
    name: "Tech Solutions Inc",
    email: "contact@techsolutions.com",
    status: "Active",
    joinDate: "2024-01-15",
    rating: 4.8,
    totalOrders: 342,
    revenue: "$125,430",
    category: "Electronics"
  },
  {
    id: 2,
    name: "Fashion Boutique",
    email: "info@fashionboutique.com",
    status: "Active", 
    joinDate: "2024-02-20",
    rating: 4.5,
    totalOrders: 189,
    revenue: "$67,890",
    category: "Clothing"
  },
  {
    id: 3,
    name: "Home Goods Store",
    email: "support@homegoods.com",
    status: "Pending",
    joinDate: "2024-03-01",
    rating: 0,
    totalOrders: 0,
    revenue: "$0",
    category: "Home & Garden"
  },
  {
    id: 4,
    name: "Sports Equipment Co",
    email: "hello@sportsequipment.com",
    status: "Active",
    joinDate: "2023-12-10",
    rating: 4.9,
    totalOrders: 567,
    revenue: "$234,560",
    category: "Sports"
  },
  {
    id: 5,
    name: "Book World",
    email: "orders@bookworld.com",
    status: "Suspended",
    joinDate: "2023-11-15",
    rating: 3.2,
    totalOrders: 89,
    revenue: "$12,340",
    category: "Books"
  }
]

function VendorsManagement() {
  return (
    <div className="space-y-8 relative">
      {/* Background decoration */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-pink-500/10 to-purple-500/10 rounded-full blur-2xl pointer-events-none" />
      
      {/* Header */}
      <div className="relative">
        <PageHeader 
          title="Vendors Management" 
          subtitle="Manage vendor accounts, approvals, and performance" 
        />
        
        {/* Stats Cards */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-r from-purple-500/10 to-transparent p-4 rounded-lg border border-purple-500/20">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-purple-500/20">
                <Store className="h-4 w-4 text-purple-500" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Total Vendors</p>
                <p className="text-lg font-bold">86</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-500/10 to-transparent p-4 rounded-lg border border-green-500/20">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-green-500/20">
                <Shield className="h-4 w-4 text-green-500" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Active</p>
                <p className="text-lg font-bold">72</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-500/10 to-transparent p-4 rounded-lg border border-yellow-500/20">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-yellow-500/20">
                <AlertCircle className="h-4 w-4 text-yellow-500" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Pending</p>
                <p className="text-lg font-bold">8</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-red-500/10 to-transparent p-4 rounded-lg border border-red-500/20">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-red-500/20">
                <TrendingUp className="h-4 w-4 text-red-500" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Suspended</p>
                <p className="text-lg font-bold">6</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Actions Bar */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Add Vendor
              </Button>
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search vendors..."
                  className="pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Vendors Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Store className="h-5 w-5" />
            Vendor Accounts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-3 font-medium text-sm text-muted-foreground">Vendor</th>
                  <th className="text-left p-3 font-medium text-sm text-muted-foreground">Category</th>
                  <th className="text-left p-3 font-medium text-sm text-muted-foreground">Status</th>
                  <th className="text-left p-3 font-medium text-sm text-muted-foreground">Rating</th>
                  <th className="text-left p-3 font-medium text-sm text-muted-foreground">Orders</th>
                  <th className="text-left p-3 font-medium text-sm text-muted-foreground">Revenue</th>
                  <th className="text-left p-3 font-medium text-sm text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {vendorsData.map((vendor) => (
                  <tr key={vendor.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="p-3">
                      <div>
                        <p className="font-medium">{vendor.name}</p>
                        <p className="text-sm text-muted-foreground">{vendor.email}</p>
                      </div>
                    </td>
                    <td className="p-3">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-muted border">
                        {vendor.category}
                      </span>
                    </td>
                    <td className="p-3">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        vendor.status === 'Active' ? 'bg-green-500/10 text-green-500 border border-green-500/20' :
                        vendor.status === 'Pending' ? 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20' :
                        'bg-red-500/10 text-red-500 border border-red-500/20'
                      }`}>
                        {vendor.status}
                      </span>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm">{vendor.rating}</span>
                      </div>
                    </td>
                    <td className="p-3 text-sm">{vendor.totalOrders}</td>
                    <td className="p-3 text-sm font-medium">{vendor.revenue}</td>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default VendorsManagement
