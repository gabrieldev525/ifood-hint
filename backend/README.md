# Installation
- Install dependencies: `yarn install` OR `npm install`
- Start postgres database docker: `docker-compose up -d`
- Apply migrations: `npx prisma migrate deploy --schema ./src/infra/db/schema.prisma`

# Running
- For development server: `yarn dev` OR `npm run dev`