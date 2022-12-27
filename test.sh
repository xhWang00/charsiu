curl http://localhost:8000/api/units -X POST -H "Content-Type: application/json" -d '{"unitNum": 1, "tenant": "Alice White", "rent": 100, "deposit": 200, "remoteControllDeposit": 10, "moveinDate": "2022-12-27T01:00:54.593Z"}'

curl http://localhost:8000/api/units -X POST -H "Content-Type: application/json" -d '{"unitNum": 2, "tenant": "Bob Black", "rent": 100, "deposit": 400, "remoteControllDeposit": 60, "moveinDate": "2022-12-27T01:05:36.369Z"}'

curl http://localhost:8000/api/units -X POST -H "Content-Type: application/json" -d '{"unitNum": 3, "tenant": "Test Test", "rent": 1600, "deposit": 300, "remoteControllDeposit": 0, "moveinDate": "2022-12-27T01:10:56.701Z"}'