server:
	@docker compose run \
	--name rebase-labs \
	--rm \
	--service-ports \
	app \
	bash -c "ruby server.rb"

budle:
	@docker composer run app bundle
