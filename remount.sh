#!/bin/bash


echo "Unmounting..."

HOME=`dirname $0`

sudo umount -f $HOME/node
sudo umount -f $HOME/www

echo "Mounting node source ..."

echo "root" | $(which sshfs) root@radius.ml:/root/.nvm/versions/node/v4.2.4 $HOME/node -p 50022 -o allow_other -o cache=no -o reconnect -o password_stdin

echo "Mounting www ..."

echo "root" | $(which sshfs) root@radius.ml:/www $HOME/www -p 50022 -o allow_other -o cache=no -o reconnect -o password_stdin

echo "Done."
