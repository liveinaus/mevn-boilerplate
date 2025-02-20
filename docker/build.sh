#!/bin/sh
VERSION="$(date -u +"%Y%m%d")"-"$(git rev-parse --short HEAD)"
TAGS="-t ${CI_REGISTRY_USER}/mevn:${VERSION} -t ${CI_REGISTRY_USER}/mevn:latest"

docker buildx build -f Dockerfile .. --platform="${BUILDX_PLATFORM}" ${TAGS} --push
