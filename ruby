#!/bin/bash
#ver o caminho onde o ruby instala as gems para colocar no -v, para
#não demorar para instalar toda vez (lab01)

docker run \
  -it \
  --rm \
  --name ruby \
  -network rebase-labs \
  ruby \
  bash

