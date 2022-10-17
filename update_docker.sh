docker-compose down
docker rmi bpmgenesis/portal:1.0 --force
docker rmi bpmgenesis/realm-broker:1.0 --force
docker-compose up