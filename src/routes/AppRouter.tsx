import { Navigate, Route, Routes } from "react-router-dom"

import Unauthorized from "../pages/Unauthorized"
import LandingPage from "../pages/LandingPage"

import AdminLoginPage from "@/features/auth/pages/AdminLoginPage"
import AdminSignupPage from "@/features/auth/pages/AdminSignupPage"
import UserLoginPage from "@/features/auth/pages/UserLoginPage"
import UserSignupPage from "@/features/auth/pages/UserSignupPage"
import VendorLoginPage from "@/features/auth/pages/VendorLoginPage"
import VendorSignupPage from "@/features/auth/pages/VendorSignupPage"

import AdminDashboard from "../pages/admin/AdminDashboard"
import UsersManagement from "../pages/admin/UsersManagement"
import VendorsManagement from "../pages/admin/VendorsManagement"
import VendorDashboard from "../pages/vendor/VendorDashboard"
import UserDashboard from "../pages/user/UserDashboard"

import ProtectedRoute from "./ProtectedRoute"
import DashboardRedirect from "./DashboardRedirect"
import { PortalLayout } from "@/layouts/PortalLayout"
import { BarChart3, Home } from "lucide-react"

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/user/login" element={<UserLoginPage />} />
      <Route path="/user/signup" element={<UserSignupPage />} />

      <Route path="/vendor/login" element={<VendorLoginPage />} />
      <Route path="/vendor/signup" element={<VendorSignupPage />} />

      <Route path="/admin/login" element={<AdminLoginPage />} />
      <Route path="/admin/signup" element={<AdminSignupPage />} />

      <Route path="/dashboard" element={<DashboardRedirect />} />

      <Route
        path="/user"
        element={
          <ProtectedRoute
            allowedRoles={["USER", "ADMIN"]}
            requiredPermissions={["portal:user:read"]}
          >
            <PortalLayout
              portalName="User Portal"
              sidebarPosition="none"
              nav={[
                { label: "Home", to: "/user/home", icon: Home },
              ]}
            />
          </ProtectedRoute>
        }
      >
        <Route path="home" element={<UserDashboard />} />
      </Route>

      <Route
        path="/vendor"
        element={
          <ProtectedRoute
            allowedRoles={["VENDOR", "ADMIN"]}
            requiredPermissions={["portal:vendor:read"]}
          >
            <PortalLayout
              portalName="Vendor Portal"
              sidebarPosition="right"
              nav={[
                { label: "Dashboard", to: "/vendor/dashboard", icon: BarChart3 },
              ]}
            />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<VendorDashboard />} />
      </Route>

      <Route
        path="/admin"
        element={
          <ProtectedRoute
            allowedRoles={["ADMIN"]}
            requiredPermissions={["portal:admin:read"]}
          >
            <PortalLayout
              portalName="Admin Portal"
              sidebarPosition="left"
              nav={[]}
            />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="users" element={<UsersManagement />} />
        <Route path="vendors" element={<VendorsManagement />} />
      </Route>

      <Route path="/unauthorized" element={<Unauthorized />} />

      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
  )
}

export default AppRouter