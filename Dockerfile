FROM nginx:1.21.1

COPY build /usr/share/nginx/html

COPY ./famex.conf /etc/nginx/conf.d/default.conf

COPY ./nginx.conf /etc/nginx/nginx.conf
