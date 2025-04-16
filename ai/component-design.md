# React Component Design Ideas

This document outlines potential React components for the web application.

**Core App Structure:**

*   **`App.tsx`:** Main entry point, sets up routing, context providers (Auth, potentially Theme).
*   **`firebaseConfig.ts`:** (Exists) Firebase initialization and service exports.

**Routing & Layout:**

*   **`RouterComponent.tsx`:** (If using `react-router-dom`) Defines routes (e.g., `/login`, `/dashboard`, `/settings`).
*   **`Layout.tsx`:** Main layout wrapper, potentially includes a persistent sidebar or header.
*   **`ProtectedRoute.tsx`:** Wraps routes that require authentication, redirects to login if user is not logged in.

**Authentication:**

*   **`LoginPage.tsx`:** Container component for the login UI.
*   **`LoginComponent.tsx`:** Presents the actual login button (e.g., "Sign in with Google"). Handles the `signInWithPopup` flow.
*   **`AuthContext.tsx` / `useAuth.ts`:** (Context Hook) Provides authentication state (`currentUser`, `loading`) throughout the app.

**Dashboard & Core Features:**

*   **`DashboardPage.tsx`:** Main container for the authenticated user experience. Fetches initial data or orchestrates child components.
*   **`TransactionList.tsx`:**
    *   Fetches/subscribes to transactions for the user.
    *   Displays transactions in a table or list.
    *   Handles filtering/sorting controls.
    *   Renders `TransactionItem.tsx`.
*   **`TransactionItem.tsx`:** Displays a single transaction row/card. May include a button/dropdown to trigger categorization.
*   **`CategorySelector.tsx`:** Dropdown or modal component to select a category for a transaction.
*   **`CategoryManager.tsx`:** (Future Phase)
    *   Displays list of user categories.
    *   Allows adding/editing/deleting categories.
*   **`BudgetTracker.tsx`:** (Future Phase)
    *   Displays budget progress for the current period.
    *   Allows setting budget limits.

**Visualization:**

*   **`SpendingByCategoryChart.tsx`:** (Future Phase) Renders a pie/doughnut chart showing spending distribution.
*   **`SpendingOverTimeChart.tsx`:** (Future Phase) Renders a line/bar chart showing spending trends.
*   **`ChartWrapper.tsx`:** (Optional) Common wrapper for charts to handle loading states, error states, titles.

**Shared/UI Components:**

*   (Components from a library like MUI: `Button`, `TextField`, `Modal`, `Table`, `Select`, `AppBar`, etc.)
*   **`LoadingSpinner.tsx`:** Reusable loading indicator.
*   **`ErrorDisplay.tsx`:** Reusable component for showing error messages.

**Notes:**

*   Component names and structure are preliminary.
*   State management approach (Context vs. Zustand/Redux) will influence component design.
*   Choice of UI library (MUI, Chakra UI, Tailwind CSS + Headless UI, etc.) will affect specific implementation. 