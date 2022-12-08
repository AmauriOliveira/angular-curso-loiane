```sh
curl --location --request GET 'http://localhost:8080/api/courses'
```

```sh
curl --location --request POST 'http://localhost:8080/api/courses' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "React",
    "category": "Front-End"
}'
```
