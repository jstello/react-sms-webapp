# React Web App Development Plan

**1. Goal:**

*   Develop a data-centric, interactive web application using React to visualize and manage personal finance data stored in Firestore.
*   The data is sourced initially from the companion Android SMS sync client.
*   Key features include user authentication, transaction viewing/categorization, budget management, and data visualization.

**2. Core Technologies:**

*   **Frontend Framework:** React (using Vite + TypeScript)
*   **Backend Services:** Firebase
    *   **Authentication:** Firebase Authentication (Google Sign-In initially, potentially others later)
    *   **Database:** Firestore (real-time updates)
    *   **Deployment:** Firebase Hosting
    *   **Backend Logic (Optional/Future):** Cloud Functions (Python or Node.js)
*   **UI Components:** Material UI (MUI) or similar React component library (to be decided)
*   **Visualization:** Chart.js (via react-chartjs-2) or Nivo/Recharts (to be decided)
*   **State Management:** React Context API initially, potentially Zustand or Redux Toolkit if complexity grows.

**3. Key Features & Development Phases:**

    *   **Phase 1: Foundation & Authentication**
        *   Basic project setup (Vite, Firebase SDK, Hosting init).
        *   Implement Firebase Authentication (Google Sign-In).
        *   Create basic routing (Login page, Dashboard page).
        *   Protect Dashboard route (only accessible when logged in).

    *   **Phase 2: Data Display & Basic Interaction**
        *   Fetch and display user's transactions from Firestore (`/users/{uid}/transactions`).
        *   Implement real-time updates for the transaction list.
        *   Display transaction details (amount, date, description, provider).
        *   Fetch and display user's categories from Firestore (`/users/{uid}/categories`).

    *   **Phase 3: Transaction Categorization**
        *   Allow users to assign a category to a transaction.
        *   Update the transaction document in Firestore with the `categoryId`.
        *   UI element (e.g., dropdown, modal) for category selection.
        *   Filter transactions by category.

    *   **Phase 4: Category Management**
        *   Allow users to create, edit, and delete categories in Firestore.
        *   Handle category deletion gracefully (e.g., prompt user about reassigning transactions).
        *   Implement logic for default categories if none exist (potentially call a Cloud Function or do client-side check).

    *   **Phase 5: Budgeting**
        *   Define Firestore structure for budgets (e.g., `/users/{uid}/budgets/{year_month}`).
        *   Allow users to set budget amounts per category per month.
        *   Display budget progress (spending vs. budget) for the current period.

    *   **Phase 6: Visualization & Reporting**
        *   Implement charts (e.g., spending by category pie chart, spending over time line chart).
        *   Integrate a charting library (Chart.js, Nivo, etc.).
        *   Provide filters for reports (date range, categories).

    *   **Phase 7: Refinement & Deployment**
        *   UI/UX improvements.
        *   Error handling.
        *   Testing.
        *   Production deployment via Firebase Hosting.

**4. Firestore Data Model:**

*   See `ai/firestore-data-model.md`.

**5. Component Design:**

*   See `ai/component-design.md`. 