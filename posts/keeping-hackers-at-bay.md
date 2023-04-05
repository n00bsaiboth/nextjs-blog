---
title: 'Fail2ban - Keep hackers (mostly amazon bots) at bay'
date: '2022-11-05'
---

The installation is quite simple, atleast on the Ubuntu environment.

Run the command,

sudo apt install fail2ban

Then of course you need to configure it.

Run the following command,

cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local

Then edit the local file, the important parts are the ignoreip (whitelist) bantime, findtime and maxretry.

Then you can determinate those jails, like if your server got too many unsuccessful login attempts, you can enable them, by setting them enabled. Then enter the bantime, findtime, maxretry and ingnoreip.

Basically, that's quite simple and if you have any questions, let me hear and also you can contact me.