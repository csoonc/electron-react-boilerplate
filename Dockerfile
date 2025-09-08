FROM node:22-bullseye
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
CMD ["bash","-lc","echo 'Build finished. Container alive.' && tail -f /dev/null"]