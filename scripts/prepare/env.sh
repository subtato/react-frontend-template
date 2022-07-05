#!/usr/bin/env bash
if [[ "$WSL_DISTRO_NAME" != "" ]]; then
  echo "To use Cypress with WSL, you will need VcXsrv: https://sourceforge.net/projects/vcxsrv/"
  PS3="Select WSL host IP address: "
  select ipAddr in $(ipconfig.exe | grep -E "IPv[46]" | rev | cut -f1 -d' ' | rev | grep -oE "([0-9a-f]{1,4}(\:+|\.)?){4,}"); do
    env DISPLAY="${ipAddr}:0.0"
    break
  done
fi

npx cypress open