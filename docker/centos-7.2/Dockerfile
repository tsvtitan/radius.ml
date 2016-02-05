FROM centos:7.2.1511
MAINTAINER tsv.titan@gmail.com

ENV container docker
ENV NODE_VERSION v4.2.4

RUN yum swap -y fakesystemd systemd
RUN yum -y update; yum clean all
RUN yum install -y initscripts
RUN yum install -y mc net-tools wget git which

RUN yum install -y openssh-server openssh-clients
RUN systemctl enable sshd.service

RUN yum install -y nginx
RUN systemctl enable nginx

RUN wget -O /etc/yum.repos.d/mongodb-org.repo https://repo.mongodb.org/yum/redhat/mongodb-org.repo
RUN yum install -y mongodb-org
RUN systemctl enable mongod

RUN rpm -Uvh https://download.fedoraproject.org/pub/epel/7/x86_64/e/epel-release-7-5.noarch.rpm
RUN yum install -y redis
RUN systemctl enable redis.service

RUN wget -O- https://raw.githubusercontent.com/creationix/nvm/v0.30.1/install.sh | bash
RUN . ~/.nvm/nvm.sh &&\
    nvm install $NODE_VERSION &&\
    npm install pm2 -g &&\
    npm install sails -g &&\
    echo "nvm use $NODE_VERSION" >> ~/.bashrc

RUN echo "export TERM=xterm" >> ~/.bashrc

RUN echo "root:root" | chpasswd

EXPOSE 22 80 1337 6379 9292 27017

CMD ["/sbin/init", "3"]
