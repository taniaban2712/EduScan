import pymongo


if __name__ == "__main__":
    client = pymongo.MongoClient("mongodb://localhost:27017")
    # print(client)
    db = client["EduScan"]
    collection = db["user_data"]
    # data = {"name": "erum", "roll_no": 7, "time": "9:30"}
    # collection.insert_one(data)
    # print(collection)
    # data = collection.find({}, {"_id": 0, "Name": 1})
    data = {"username": "erum", "user_type": "student", "password": "test"}
    collection.insert_one(data)
    # for i in data:
    #     print(i)
    # print(data)
    # name = list()
    # for i in data:
    #     # print(i.keys())
    #     print(i)
    #     if type(i) == dict:
    #         name.append(i["Name"])
    # print(name)
