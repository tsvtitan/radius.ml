#!/bin/sh


echo "Unmounting..."

HOME=`dirname $0`

sudo umount -f $HOME/www

echo "Mounting..."

echo "root" | sshfs root@radius.ml:/www $HOME/www -p 50022 -o allow_other -o cache=no -o reconnect -o password_stdin

echo "Done."
