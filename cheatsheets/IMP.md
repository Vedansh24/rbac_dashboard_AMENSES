## 1 
Interfaces (Most Important) ---

What it means
An interface defines the shape of an object.
Think of it like a form template.
Example in our project

interface User {
  id: number
  name: string
  email: string
}

MEANING 

const user = {
  id: 1,
  name: "Vedansh",
  email: "vedansh@gmail.com"
}
-------------------------------------

## 2 
Type (Union Types) ---
Used when a variable can only have limited values.
Example in RBAC

type Role = "USER" | "VENDOR" | "ADMIN"

Meaning:

let role: Role = "ADMIN"

## 3
Redux State Type ---

We must define the structure of Redux state.

Example:

interface AuthState {
  user: User | null
  token: string | null
  role: Role | null
  isAuthenticated: boolean
}

Meaning the authentication state contains:

user
token
role
login status

## 4 
Function Types--- 

TypeScript can define input and output types of functions.

Example:

const login = (email: string, password: string): boolean => {
  return true
}

Meaning:

Inputs:

email → string
password → string

Output:

true / false

## 5
Props Type (React) --- 
In React we send props to components.

Example:

interface ButtonProps {
  label: string
  onClick: () => void
}

Component:

<Button label="Login" onClick={handleLogin} />

Meaning:

label → must be text
onClick → must be function