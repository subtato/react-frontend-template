#!/bin/bash
if [[ -f "/etc/debian_version" ]]; then
  apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
elif [[ -f "/etc/redhat_release" ]]; then
  yum install -y xorg-x11-server-Xvfb gtk2-devel gtk3-devel libnotify-devel GConf2 nss libXScrnSaver alsa-lib
else
  echo "Unknown OS: "$(uname -a)
  exit 404
fi