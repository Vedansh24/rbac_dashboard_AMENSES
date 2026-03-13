import { PageHeader } from "@/components/shared/PageHeader"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Plus, Search, Filter, MoreVertical, Edit, Trash2, Shield, AlertCircle } from "lucide-react"

// Sample user data
const usersData = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "USER",
    status: "Active",
    joinDate: "2024-01-15",
    lastLogin: "2024-03-13",
    permissions: ["portal:user:read", "portal:user:write"]
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com", 
    role: "USER",
    status: "Active",
    joinDate: "2024-02-20",
    lastLogin: "2024-03-12",
    permissions: ["portal:user:read"]
  },
  {
    id: 3,
    name: "Bob Wilson",
    email: "bob.wilson@example.com",
    role: "USER",
    status: "Suspended",
    joinDate: "2024-01-10",
    lastLogin: "2024-03-01",
    permissions: ["portal:user:read"]
  },
  {
    id: 4,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    role: "USER",
    status: "Active",
    joinDate: "2024-03-01",
    lastLogin: "2024-03-13",
    permissions: ["portal:user:read", "portal:user:write", "portal:user:delete"]
  },
  {
    id: 5,
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    role: "USER",
    status: "Inactive",
    joinDate: "2023-12-15",
    lastLogin: "2024-02-28",
    permissions: ["portal:user:read"]
  }
]

function UsersManagement() {
  return (
    <div className="space-y-8 relative">
      {/* Background decoration */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl pointer-events-none" />
      
      {/* Header */}
      <div className="relative">
        <PageHeader 
          title="Users Management" 
          subtitle="Manage user accounts, roles, and permissions" 
        />
        
        {/* Stats Cards */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-r from-blue-500/10 to-transparent p-4 rounded-lg border border-blue-500/20">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-blue-500/20">
                <Users className="h-4 w-4 text-blue-500" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Total Users</p>
                <p className="text-lg font-bold">1,240</p>
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
                <p className="text-lg font-bold">1,156</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-500/10 to-transparent p-4 rounded-lg border border-yellow-500/20">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-yellow-500/20">
                <AlertCircle className="h-4 w-4 text-yellow-500" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Suspended</p>
                <p className="text-lg font-bold">42</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-gray-500/10 to-transparent p-4 rounded-lg border border-gray-500/20">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-gray-500/20">
                <Users className="h-4 w-4 text-gray-500" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Inactive</p>
                <p className="text-lg font-bold">42</p>
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
                Add User
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
                  placeholder="Search users..."
                  className="pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Users Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            User Accounts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-3 font-medium text-sm text-muted-foreground">User</th>
                  <th className="text-left p-3 font-medium text-sm text-muted-foreground">Role</th>
                  <th className="text-left p-3 font-medium text-sm text-muted-foreground">Status</th>
                  <th className="text-left p-3 font-medium text-sm text-muted-foreground">Join Date</th>
                  <th className="text-left p-3 font-medium text-sm text-muted-foreground">Last Login</th>
                  <th className="text-left p-3 font-medium text-sm text-muted-foreground">Permissions</th>
                  <th className="text-left p-3 font-medium text-sm text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {usersData.map((user) => (
                  <tr key={user.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="p-3">
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                      </div>
                    </td>
                    <td className="p-3">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-muted border border-border">
                        {user.role}
                      </span>
                    </td>
                    <td className="p-3">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        user.status === 'Active' ? 'bg-green-500/10 text-green-500 border border-green-500/20' :
                        user.status === 'Suspended' ? 'bg-red-500/10 text-red-500 border border-red-500/20' :
                        'bg-gray-500/10 text-gray-500 border border-gray-500/20'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="p-3 text-sm">{user.joinDate}</td>
                    <td className="p-3 text-sm">{user.lastLogin}</td>
                    <td className="p-3">
                      <div className="flex flex-wrap gap-1">
                        {user.permissions.slice(0, 2).map((permission, index) => (
                          <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-muted border border-border">
                            {permission.split(':')[1]}
                          </span>
                        ))}
                        {user.permissions.length > 2 && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-muted border border-border">
                            +{user.permissions.length - 2}
                          </span>
                        )}
                      </div>
                    </td>
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

export default UsersManagement
