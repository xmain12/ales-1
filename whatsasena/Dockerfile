FROM fusuf/whatsasena:latest

RUN git clone https://github.com/xmain12/ales-1 /root/ales
WORKDIR /root/ales/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
