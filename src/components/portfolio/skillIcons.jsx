import {
  ReactDark,
  TypeScript,
  JavaScript, // ✅ exists
  HTML,
  CSS,
  TailwindCSSDark,
  Bootstrap,
  NodeJSDark,
  PHPDark, // was: PHP
  MySQLDark, // was: MySQL
  PostgreSQLDark,
  Git,
  GithubDark, // ✅ fixed: was "Github" → "GithubDark"
  VSCodeDark,
  Postman,
} from "@fdorantesm/react-skill-icons";

// Fallback img components for icons not in skillicons.dev
const Flowbite = () => (
  <img
    src="https://flowbite.com/favicon.ico"
    alt="Flowbite"
    width="20"
    height="20"
  />
);
const Cursor = () => (
  <img
    src="https://cursor.sh/brand/icon.svg"
    alt="Cursor"
    width="20"
    height="20"
  />
);
const Laragon = () => (
  <img
    src="https://laragon.org/favicon.ico"
    alt="Laragon"
    width="20"
    height="20"
  />
);
const XAMPP = () => (
  <img
    src="https://www.apachefriends.org/favicon.ico"
    alt="XAMPP"
    width="20"
    height="20"
  />
);

export const skillIcons = {
  "React.js": ReactDark,
  TypeScript,
  JavaScript,
  HTML,
  CSS,
  "Tailwind CSS": TailwindCSSDark,
  Bootstrap,
  Flowbite, // custom fallback
  "Node.js": NodeJSDark,
  PHP: PHPDark,
  MySQL: MySQLDark,
  PostgreSQL: PostgreSQLDark,
  Git,
  GitHub: GithubDark, // fixed name
  "VS Code": VSCodeDark,
  Postman,
  Cursor, // custom fallback
  XAMPP, // custom fallback
  Laragon, // custom fallback
};
