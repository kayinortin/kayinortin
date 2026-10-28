# Edison Lee

**Full Stack Engineer building ED-PULSE**

I turn complex education workflows into connected web and mobile experiences. My work on ED-PULSE spans user interfaces, backend APIs, data modeling, and production reliability.

## ED-PULSE

![ED-PULSE — Education management across web, mobile, and backend](assets/ed-pulse-banner.svg)

A multi-tenant education management platform for staff, students, and parents. It connects enrollment, scheduling, attendance, exams, tuition, meal accounting, and communication across web and mobile.

### Engineering highlights

- **Tenant boundaries across the stack.** Role-aware interfaces and tenant-scoped APIs, with cache and real-time state scoped to the active user and tenant.
- **Real-time features beyond message delivery.** Shared WebSocket connections, reconnect recovery, and cross-tab cache refresh for chat and operational views.
- **Business workflows built for consistency.** Transactional payment updates, meal-balance ledgers, and idempotency handling for meal-record writes.
- **Release checks that exercise the application.** Focused regression tests, production artifact checks, and HTTP startup smoke tests, with Sentry for mobile diagnostics.

## Core stack

| Area | Technologies |
| --- | --- |
| Web | TypeScript, React, Next.js, Nx, Tailwind CSS, shadcn/ui |
| Mobile | React Native, Expo |
| Backend | Node.js, Express, Prisma, MySQL, Redis |
| Delivery | Docker, Google Cloud, Jest, Cypress, Sentry |

## Contact

[edison@ed-pulse.com](mailto:edison@ed-pulse.com)
