FROM centos:7.2.1511
MAINTAINER tsv.titan@gmail.com

ENV    container docker

RUN yum swap -y fakesystemd systemd
RUN yum -y update; yum clean all
RUN yum install -y initscripts
RUN yum install -y mc net-tools wget git

RUN yum install -y openssh-server openssh-clients
RUN systemctl enable sshd.service

RUN wget -O /etc/yum.repos.d/mongodb-org.repo https://repo.mongodb.org/yum/redhat/mongodb-org.repo
RUN yum install -y mongodb-org

RUN wget -O- https://raw.githubusercontent.com/creationix/nvm/v0.30.1/install.sh | bash
RUN nvm install v4.2.4

RUN npm install pm2 -g

#RUN echo "export TERM=xterm" >> ~/.bash_profile

CMD ["/sbin/init", "3"]