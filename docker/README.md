## prepearation
	sudo su
	apt update
	apt install docker-buildx
	docker run --privileged --rm tonistiigi/binfmt --install all
	docker buildx create --name mybuilder --bootstrap --use
	docker login -u admin@liveinaus.com -p xxxxx

## build manually
    BUILDX_PLATFORM=linux/amd64,linux/arm64 CI_REGISTRY_USER=liveinaus ./build.sh