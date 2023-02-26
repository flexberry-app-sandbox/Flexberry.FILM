docker build --no-cache -f SQL\Dockerfile.PostgreSql -t film/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t film/app ../..
