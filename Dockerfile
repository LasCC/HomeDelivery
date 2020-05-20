FROM node:alpine as build

WORKDIR /app

COPY package*.json /app/
RUN npm install ---loglevel verbose && \ 
npm install react-scripts@3.4.1 -g --loglevel verbose

COPY . .
ENV PATH /app/node_modules/.bin:$PATH
RUN npm run build  ---loglevel verbose

# NGINX

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx","-g","daemon off;"]
