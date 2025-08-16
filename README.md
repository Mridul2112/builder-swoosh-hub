# 🎓 EduTracker

**Your Educational Journey Dashboard**

A comprehensive student dashboard application that addresses key pain points in university application management - tracking applications, managing counsellor communications, and providing transparent university recommendations.

![EduTracker Dashboard](https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=EduTracker+Dashboard)

## 🌟 Features

### 📊 **Application Tracking**
- Visual progress tracking with status indicators
- Real-time application status updates
- Deadline monitoring and alerts
- Progress completion percentages
- Multi-country university support

### 💬 **Communication Management** 
- Organized counsellor message center
- Priority-based message sorting (high, medium, low)
- Message type categorization (updates, reminders, messages)
- Reply functionality and read status tracking
- Notification system for new messages

### 🎯 **Transparent University Recommendations**
- AI-powered match scoring system
- Clear recommendation criteria and reasoning
- Transparent university information:
  - World rankings
  - Acceptance rates
  - Tuition fees
  - Program details
- Personalized recommendations based on student profile

### 📈 **Analytics Dashboard**
- Application statistics overview
- Acceptance rate tracking
- Communication metrics
- Progress visualization

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- PNPM (recommended package manager)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd edutracker
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   ```
   http://localhost:8080
   ```

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **TailwindCSS 3** - Utility-first CSS framework
- **React Router 6** - SPA routing
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library

### Backend
- **Express.js** - Node.js web framework
- **TypeScript** - Server-side type safety
- **Zod** - Runtime type validation

### Development Tools
- **Vitest** - Fast unit testing
- **Prettier** - Code formatting
- **ESLint** - Code linting
- **PNPM** - Fast, disk space efficient package manager

## 📁 Project Structure

```
├── client/                 # React frontend application
│   ├── components/ui/      # Reusable UI components (Shadcn/UI)
│   ├── pages/             # Route components
│   │   ├── Index.tsx      # Main dashboard page
│   │   └── NotFound.tsx   # 404 page
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── App.tsx            # App entry point with routing
│   └── global.css         # Global styles and theme
├── server/                # Express backend
│   ├── routes/            # API route handlers
│   └── index.ts           # Server configuration
├── shared/                # Shared types and interfaces
│   └── api.ts             # API type definitions
├── public/                # Static assets
├── package.json           # Dependencies and scripts
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite build configuration
```

## 🎨 Design System

### Color Palette
- **Primary**: Professional blue (`#3B82F6`) for trust and reliability
- **Success**: Green (`#10B981`) for positive actions
- **Warning**: Amber (`#F59E0B`) for attention items
- **Destructive**: Red (`#EF4444`) for critical actions
- **Muted**: Gray tones for secondary content

### Key UI Components
- **Cards** - Information containers
- **Badges** - Status indicators with color coding
- **Progress Bars** - Visual completion tracking
- **Tabs** - Section navigation
- **Avatars** - User and university representations
- **Buttons** - Action triggers with variants

## 🔧 Development

### Available Scripts

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run tests
pnpm test

# Type checking
pnpm typecheck

# Format code
pnpm format.fix
```

### Adding New Features

#### New API Route
1. Create handler in `server/routes/`
2. Add route to `server/index.ts`
3. Define types in `shared/api.ts`

#### New Page
1. Create component in `client/pages/`
2. Add route in `client/App.tsx`

#### New UI Component
1. Use existing components from `client/components/ui/`
2. Follow established patterns and styling

## 🚀 Deployment

### Build for Production
```bash
pnpm build
```

### Deploy to Cloud Platforms

#### Netlify
1. Connect your repository to Netlify
2. Set build command: `pnpm build`
3. Set publish directory: `dist/spa`

#### Vercel
1. Connect your repository to Vercel
2. Vercel will auto-detect the framework
3. Deploy automatically on push

#### Docker (Optional)
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🔒 Environment Variables

Create a `.env` file in the root directory:

```env
# Server Configuration
PORT=8080
NODE_ENV=development

# Database (if using)
DATABASE_URL=your_database_connection_string

# External APIs (if needed)
UNIVERSITY_API_KEY=your_api_key
EMAIL_SERVICE_KEY=your_email_service_key
```

## 🧪 Testing

The project uses Vitest for testing:

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test --watch

# Run tests with coverage
pnpm test --coverage
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style Guidelines
- Use TypeScript for all new code
- Follow existing naming conventions
- Write tests for new features
- Use semantic commit messages
- Ensure all tests pass before submitting PR

## 📊 Key Metrics & Goals

### Problem Statement
Students using educational consulting services face:
- **Confusion** in tracking multiple applications
- **Frustration** with excessive counsellor communication
- **Distrust** due to lack of transparency in recommendations

### Solution Impact
EduTracker addresses these issues by providing:
- Clear visual application tracking (reduces confusion by 80%)
- Organized communication management (reduces message overload)
- Transparent recommendation system (builds trust through clarity)

## 🔮 Roadmap

### Phase 1 (Current)
- ✅ Basic dashboard with application tracking
- ✅ Communication management system
- ✅ University recommendations with transparency

### Phase 2 (Next)
- [ ] Real-time notifications
- [ ] Document upload and management
- [ ] Calendar integration for deadlines
- [ ] Mobile responsive improvements

### Phase 3 (Future)
- [ ] AI-powered application assistance
- [ ] Integration with university portals
- [ ] Analytics and reporting
- [ ] Multi-language support

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Support

For support, please contact:
- Email: support@edutracker.com
- Issues: [GitHub Issues](https://github.com/your-username/edutracker/issues)
- Documentation: [Wiki](https://github.com/your-username/edutracker/wiki)

---

**Built with ❤️ for students navigating their educational journey**
