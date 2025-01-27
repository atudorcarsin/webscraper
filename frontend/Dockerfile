FROM node:23-slim
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

workdir ./frontend

COPY package.json .
RUN pnpm install

copy . .

ARG FRONTEND_PORT

EXPOSE $FRONTEND_PORT

CMD ["pnpm", "run", "dev"]