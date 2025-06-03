// Localstorage.ts

interface Task {
  title: string;
  description: string;
  date: string;
  category: string;
  project: string;
  active: boolean;
  newTask: boolean;
  completed: boolean;
  failed: boolean;
}

interface Employee {
  id: number;
  email: string;
  password: string;
  tasks: Task[];
}

interface Admin {
  id: number;
  email: string;
  password: string;
}

const employees: Employee[] = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Fix login bug",
        description: "Resolve issue with user login validation",
        date: "2025-05-10",
        category: "Development",
        project: "Project Alpha",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Update API docs",
        description: "Document all new endpoints",
        date: "2025-05-12",
        category: "Documentation",
        project: "Project Beta",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "UI Testing",
        description: "Run tests on signup and dashboard pages",
        date: "2025-05-14",
        category: "Testing",
        project: "Project Gamma",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Build user dashboard",
        description: "Create frontend layout for user dashboard",
        date: "2025-05-11",
        category: "Development",
        project: "Project Delta",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Fix mobile layout",
        description: "Resolve responsiveness issues in mobile view",
        date: "2025-05-13",
        category: "Design",
        project: "Project Omega",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Add notifications",
        description: "Implement in-app notification system",
        date: "2025-05-15",
        category: "Development",
        project: "Project Phoenix",
        active: true,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Test payment flow",
        description: "End-to-end testing of payment gateway",
        date: "2025-05-16",
        category: "Testing",
        project: "Project Titan",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Setup CI/CD",
        description: "Configure GitHub Actions for automated builds",
        date: "2025-05-10",
        category: "DevOps",
        project: "Project Nova",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Code review",
        description: "Review PRs from frontend team",
        date: "2025-05-12",
        category: "Code Review",
        project: "Project Zenith",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Security audit",
        description: "Check for vulnerabilities in user authentication",
        date: "2025-05-13",
        category: "Security",
        project: "Project Orion",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Analytics setup",
        description: "Integrate Google Analytics",
        date: "2025-05-14",
        category: "Marketing",
        project: "Project Pulse",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Fix 500 error",
        description: "Debug server error on profile update",
        date: "2025-05-15",
        category: "Bug Fixing",
        project: "Project Echo",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Onboard new devs",
        description: "Setup accounts and tools for new team members",
        date: "2025-05-10",
        category: "HR",
        project: "Project Quantum",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Design landing page",
        description: "Create design mockups for marketing site",
        date: "2025-05-11",
        category: "Design",
        project: "Project Rocket",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Performance testing",
        description: "Load test for high-traffic scenarios",
        date: "2025-05-13",
        category: "Testing",
        project: "Project Blaze",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Database backup",
        description: "Automate daily backups",
        date: "2025-05-14",
        category: "DevOps",
        project: "Project Orbit",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Update user guide",
        description: "Revise and update user manuals",
        date: "2025-05-15",
        category: "Documentation",
        project: "Project Sky",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
];

const admin: Admin[] = [
  {
    id: 1,
    email: "admin@example.com", // ✅ Corrected from "+"
    password: "123",
  },
];

export const setLocalStorage = (): void => {
  localStorage.setItem("employee", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = (): { employees: Employee[]; admin: Admin[] } => {
  const employees = JSON.parse(localStorage.getItem("employee") || "[]");
  const admin = JSON.parse(localStorage.getItem("admin") || "[]");

  return { employees, admin };
};
